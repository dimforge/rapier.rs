use rapier2d::{parry::query::ShapeCastOptions, prelude::*};

fn main() {
    let mut rigid_body_set = RigidBodySet::new();
    let mut collider_set = ColliderSet::new();

    /* Create the ground. */
    let collider = ColliderBuilder::cuboid(100.0, 0.1).build();
    collider_set.insert(collider);

    /* Create the bouncing ball. */
    let rigid_body = RigidBodyBuilder::dynamic()
        .translation(vector![0.0, 10.0])
        .build();
    let collider = ColliderBuilder::ball(0.5).restitution(0.7).build();
    let ball_body_handle = rigid_body_set.insert(rigid_body);
    collider_set.insert_with_parent(collider, ball_body_handle, &mut rigid_body_set);

    /* Create other structures necessary for the simulation. */
    let gravity = vector![0.0, -9.81];
    let integration_parameters = IntegrationParameters::default();
    let mut physics_pipeline = PhysicsPipeline::new();
    let mut island_manager = IslandManager::new();
    let mut broad_phase = DefaultBroadPhase::new();
    let mut narrow_phase = NarrowPhase::new();
    let mut impulse_joint_set = ImpulseJointSet::new();
    let mut multibody_joint_set = MultibodyJointSet::new();
    let mut ccd_solver = CCDSolver::new();
    let mut query_pipeline = QueryPipeline::new();
    let physics_hooks = ();
    let event_handler = ();

    let collider = ColliderBuilder::cuboid(1.0, 1.0)
        .translation(vector![0.0, 10.0])
        .build();
    let handle1 = collider_set.insert(collider);
    let collider = ColliderBuilder::cuboid(1.0, 1.0)
        .translation(vector![0.0, 15.0])
        .build();
    let handle_to_remove = collider_set.insert(collider);

    // DOCUSAURUS: Update start
    // Update the query pipeline to take the latest collider positions into account.
    query_pipeline.update(&collider_set);
    // Scene queries can now be executed accurately.
    // DOCUSAURUS: Update stop
    collider_set.remove(
        handle_to_remove,
        &mut island_manager,
        &mut rigid_body_set,
        true,
    );
    let collider = collider_set.get_mut(handle1).unwrap();
    collider.set_translation(vector![0.0, 12.0]);
    let collider = ColliderBuilder::cuboid(1.0, 1.0)
        .translation(vector![0.0, 10.0])
        .build();
    let handle2 = collider_set.insert(collider);
    let modified_colliders = vec![handle1, handle2];
    let removed_colliders = vec![handle_to_remove];

    // DOCUSAURUS: UpdateIncremental start
    // Update the query pipeline with given modifications.
    // It is recommended to set the last parameter `refit_and_rebalance`
    // to `true` to update the space partitioning for best query performance.
    query_pipeline.update_incremental(&collider_set, &modified_colliders, &removed_colliders, true);
    // Scene queries can now be executed accurately.
    // DOCUSAURUS: UpdateIncremental stop

    raycast_section(&query_pipeline, &rigid_body_set, &collider_set);
    shapecast_section(&query_pipeline, &rigid_body_set, &collider_set);
    point_projection_section(&query_pipeline, &rigid_body_set, &collider_set);
    intersection_section(&query_pipeline, &rigid_body_set, &collider_set);

    let player_handle = ball_body_handle;
    // DOCUSAURUS: QueryFilter start
    let ray = Ray::new(point![1.0, 2.0], vector![0.0, 1.0]);
    let max_toi = 4.0;
    let solid = true;
    let filter = QueryFilter::exclude_dynamic()
        .exclude_sensors()
        .exclude_rigid_body(player_handle)
        .groups(InteractionGroups::new(
            Group::GROUP_1 | Group::GROUP_2,
            Group::GROUP_1,
        ))
        .predicate(&|handle, collider| collider.user_data == 10);

    if let Some((handle, toi)) =
        query_pipeline.cast_ray(&rigid_body_set, &collider_set, &ray, max_toi, solid, filter)
    {
        // Handle the hit.
    }
    // DOCUSAURUS: QueryFilter stop
}

#[rustfmt::skip]
fn raycast_section(
    query_pipeline: &QueryPipeline,
    rigid_body_set: &RigidBodySet,
    collider_set: &ColliderSet,
) {
    // DOCUSAURUS: Raycast start
    let ray = Ray::new(point![1.0, 2.0], vector![0.0, 1.0]);
    let max_toi = 4.0;
    let solid = true;
    let filter = QueryFilter::default();

    if let Some((handle, toi)) =
        query_pipeline.cast_ray(rigid_body_set, collider_set, &ray, max_toi, solid, filter)
    {
        // The first collider hit has the handle `handle` and it hit after
        // the ray travelled a distance equal to `ray.dir * toi`.
        let hit_point = ray.point_at(toi); // Same as: `ray.origin + ray.dir * toi`
        println!("Collider {:?} hit at point {}", handle, hit_point);
    }

    if let Some((handle, intersection)) = query_pipeline.cast_ray_and_get_normal(
        rigid_body_set, collider_set, &ray, max_toi, solid, filter,
    ) {
        // This is similar to `QueryPipeline::cast_ray` illustrated above except
        // that it also returns the normal of the collider shape at the hit point.
        let hit_point = ray.point_at(intersection.time_of_impact);
        let hit_normal = intersection.normal;
        println!(
            "Collider {:?} hit at point {} with normal {}",
            handle, hit_point, hit_normal
        );
    }
    query_pipeline.intersections_with_ray(rigid_body_set, collider_set, &ray, max_toi, solid, filter,
        |handle, intersection| {
            // Callback called on each collider hit by the ray.
            let hit_point = ray.point_at(intersection.time_of_impact);
            let hit_normal = intersection.normal;
            println!(
                "Collider {:?} hit at point {} with normal {}",
                handle, hit_point, hit_normal
            );
            true // Return `false` instead if we want to stop searching for other hits.
        },
    );
    // DOCUSAURUS: Raycast stop
}

#[rustfmt::skip]
fn shapecast_section(
    query_pipeline: &QueryPipeline,
    rigid_body_set: &RigidBodySet,
    collider_set: &ColliderSet,
) {
    // DOCUSAURUS: Shapecast start
    let shape = Cuboid::new(vector![1.0, 2.0]);
    let shape_pos = Isometry::new(vector![0.0, 1.0], 0.8);
    let shape_vel = vector![0.1, 0.4];
    let filter = QueryFilter::default();
    let options = ShapeCastOptions {
        max_time_of_impact: 4.0,
        target_distance: 0.0,
        stop_at_penetration: false,
        compute_impact_geometry_on_penetration: false,
    };
    if let Some((handle, hit)) = query_pipeline.cast_shape(rigid_body_set,
        collider_set, &shape_pos, &shape_vel, &shape, options, filter
    ) {
        // The first collider hit has the handle `handle`. The `hit` is a
        // structure containing details about the hit configuration.
        println!("Hit the collider {:?} with the configuration: {:?}", handle, hit);
    }
    // DOCUSAURUS: Shapecast stop
}

#[rustfmt::skip]
fn point_projection_section(
    query_pipeline: &QueryPipeline,
    rigid_body_set: &RigidBodySet,
    collider_set: &ColliderSet,
) {
    // DOCUSAURUS: PointProjection start
    let point = point![1.0, 2.0];
    let solid = true;
    let filter = QueryFilter::default();
    
    if let Some((handle, projection)) = query_pipeline.project_point(
        rigid_body_set,
        collider_set, &point, solid, filter
    ) {
        // The collider closest to the point has this `handle`.
        println!("Projected point on collider {:?}. Point projection: {}", handle, projection.point);
        println!("Point was inside of the collider shape: {}", projection.is_inside);
    }
    
    query_pipeline.intersections_with_point(
        rigid_body_set, collider_set, &point, filter, |handle| {
            // Callback called on each collider with a shape containing the point.
            println!("The collider {:?} contains the point.", handle);
            // Return `false` instead if we want to stop searching for other colliders containing this point.
            true
        }
    );
    // DOCUSAURUS: PointProjection stop
}

#[rustfmt::skip]
fn intersection_section(
    query_pipeline: &QueryPipeline,
    rigid_body_set: &RigidBodySet,
    collider_set: &ColliderSet,
) {
    // DOCUSAURUS: IntersectionTest start
    let shape = Cuboid::new(vector![1.0, 2.0]);
    let shape_pos = Isometry::new(vector![0.0, 1.0], 0.8);
    let filter = QueryFilter::default();

    query_pipeline.intersections_with_shape(rigid_body_set,
        collider_set, &shape_pos, &shape, filter, |handle| {
            println!("The collider {:?} intersects our shape.", handle);
            true // Return `false` instead if we want to stop searching for other colliders that contain this point.
        }
    );

    let aabb = Aabb::new(point![-1.0, -2.0], point![1.0, 2.0]);
    query_pipeline.colliders_with_aabb_intersecting_aabb(&aabb, |handle| {
        println!("The collider {:?} has an AABB intersecting our test AABB", handle);
        true // Return `false` instead if we want to stop searching for other colliders that contain this point.
    });
    // DOCUSAURUS: IntersectionTest stop
}
