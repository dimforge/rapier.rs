use bevy::prelude::*;
use bevy_rapier3d::prelude::*;

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_plugins(RapierPhysicsPlugin::<NoUserData>::default())
        .add_plugins(RapierDebugRenderPlugin::default())
        .add_systems(Startup, setup_graphics)
        .add_systems(Startup, setup_physics)
        .add_systems(Update, modify_collider_position)
        .run();
}

fn setup_graphics(mut commands: Commands) {
    // Add a camera so we can see the debug-render.
    commands.spawn(Camera2dBundle::default());
}

fn setup_physics(mut commands: Commands) {
    // DOCUSAURUS: Creation1 start
    use bevy_rapier3d::prelude::*;

    commands
        .spawn(Collider::cuboid(1.0, 2.0, 1.0))
        .insert(Sensor)
        .insert(TransformBundle::from(Transform::from_xyz(2.0, 0.0, 0.0)))
        .insert(Friction::coefficient(0.7))
        .insert(Restitution::coefficient(0.3))
        .insert(ColliderMassProperties::Density(2.0));
    // DOCUSAURUS: Creation1 stop

    // DOCUSAURUS: ColliderPosition1 start
    /* Set the collider position when the collider is created. */
    commands
        .spawn(Collider::cuboid(0.5, 0.5, 0.5))
        .insert(TransformBundle::from(Transform::from_xyz(1.0, 2.0, 3.0)));
    // DOCUSAURUS: ColliderPosition1 stop

    // DOCUSAURUS: ColliderPosition3 start
    // Attach the collider to the rigid-body. The collider is attached as its
    // children, so the collider’s `Transform` components sets its position
    // relative to the parent rigid-body.
    commands
        .spawn(RigidBody::Dynamic)
        .with_children(|children| {
            children
                .spawn(Collider::cuboid(0.5, 0.5, 0.5))
                .insert(TransformBundle::from(Transform::from_xyz(1.0, 2.0, 0.0)));
        });
    // DOCUSAURUS: ColliderPosition3 stop
}

// DOCUSAURUS: ColliderPosition2 start
/* Set the collider position inside of a system. */
fn modify_collider_position(mut positions: Query<&mut Transform, With<Collider>>) {
    for mut position in positions.iter_mut() {
        position.translation.x = 2.0;
    }
}
// DOCUSAURUS: ColliderPosition2 stop
