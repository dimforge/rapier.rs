import RAPIER, { RigidBodyDesc, RigidBodyType, ColliderDesc } from '@dimforge/rapier3d';

{
    // DOCUSAURUS: Setup start
    // The world that will contain our rigid-bodies.
    let world = new RAPIER.World({ x: 0.0, y: -9.81, z: 0.0 });

    // Builder for a fixed rigid-body.
    let _1 = RigidBodyDesc.fixed();
    // Builder for a dynamic rigid-body.
    let _2 = RigidBodyDesc.dynamic();
    // Builder for a kinematic rigid-body controlled at the velocity level.
    let _3 = RigidBodyDesc.kinematicVelocityBased();
    // Builder for a kinematic rigid-body controlled at the position level.
    let _4 = RigidBodyDesc.kinematicPositionBased();
    // Builder for a body with a status specified by an enum.
    let rigidBodyDesc = new RigidBodyDesc(RigidBodyType.Dynamic)
        // The rigid body translation.
        // Default: zero vector.
        .setTranslation(0.0, 5.0, 1.0)
        // The rigid body rotation.
        // Default: no rotation.
        .setRotation({ w: 1.0, x: 0.0, y: 0.0, z: 0.0 })
        // The linear velocity of this body.
        // Default: zero velocity.
        .setLinvel(1.0, 2.0, 4.0)
        // The angular velocity of this body.
        // Default: zero velocity.
        .setAngvel({ x: 3.0, y: 0.0, z: 1.0 })
        // The scaling factor applied to the gravity affecting the rigid-body.
        // Default: 1.0
        .setGravityScale(0.5)
        // Whether or not this body can sleep.
        // Default: true
        .setCanSleep(true)
        // Whether or not CCD is enabled for this rigid-body.
        // Default: false
        .setCcdEnabled(false);

    // All done, actually build the rigid-body.
    let rigidBody = world.createRigidBody(rigidBodyDesc);
    // The integer handle of the rigid-body can be read from the `handle` field. 
    let rigidBodyHandle = rigidBody.handle;
    // DOCUSAURUS: Setup stop

    let position = rigidBody.translation();
    console.log("Rigid-body position: ", position.x, position.y);
}

let world = new RAPIER.World({ x: 0.0, y: -9.81, z: 0.0 });
{
    // DOCUSAURUS: position1 start
    /* Set the position when the rigid-body is created. */
    let rigidBodyDesc = RigidBodyDesc.dynamic()
        // The rigid body translation.
        // Default: zero vector.
        .setTranslation(0.0, 5.0, 1.0)
        // The rigid body rotation.
        // Default: no rotation.
        .setRotation({ w: 1.0, x: 0.0, y: 0.0, z: 0.0 });
    let rigidBody = world.createRigidBody(rigidBodyDesc);
    // DOCUSAURUS: position1 stop

    // DOCUSAURUS: position2 start
    /* Set the position after the rigid-body creation. */
    // The `true` argument makes sure the rigid-body is awake.
    rigidBody.setTranslation({ x: 0.0, y: 5.0, z: 1.0 }, true);
    rigidBody.setRotation({ w: 1.0, x: 0.0, y: 0.0, z: 0.0 }, true);
    // DOCUSAURUS: position2 stop
}

{
    // DOCUSAURUS: position1 start
    /* Set the velocities when the rigid-body is created. */
    let rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
        // The linear velocity of this body.
        // Default: zero velocity.
        .setLinvel(1.0, 3.0, 4.0)
        // The angular velocity of this body.
        // Default: zero velocity.
        .setAngvel({ x: 3.0, y: 0.0, z: 0.0 });
    let rigidBody = world.createRigidBody(rigidBodyDesc);
    // DOCUSAURUS: position1 stop

    // DOCUSAURUS: position2 start
    /* Set the velocities after the rigid-body creation. */
    // The `true` argument makes sure the rigid-body is awake.
    rigidBody.setLinvel({ x: 1.0, y: 3.0, z: 4.0 }, true);
    rigidBody.setAngvel({ x: 3.0, y: 0.0, z: 0.0 }, true);
    // DOCUSAURUS: position2 stop
}

{
    let rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic();
    let rigidBody = world.createRigidBody(rigidBodyDesc);

    // DOCUSAURUS: Forces start
    // The `true` argument makes sure the rigid-body is awake.
    rigidBody.resetForces(true);  // Reset the forces to zero.
    rigidBody.resetTorques(true); // Reset the torques to zero.
    rigidBody.addForce({ x: 0.0, y: 1000.0, z: 0.0 }, true);
    rigidBody.addTorque({ x: 100.0, y: 0.0, z: 0.0 }, true);
    rigidBody.addForceAtPoint({ x: 0.0, y: 1000.0, z: 0.0 }, { x: 1.0, y: 2.0, z: 3.0 }, true);

    rigidBody.applyImpulse({ x: 0.0, y: 1000.0, z: 0.0 }, true);
    rigidBody.applyTorqueImpulse({ x: 100.0, y: 0.0, z: 0.0 }, true);
    rigidBody.applyImpulseAtPoint({ x: 0.0, y: 1000.0, z: 0.0 }, { x: 1.0, y: 2.0, z: 3.0 }, true);
    // DOCUSAURUS: Forces stop
}

{
    // DOCUSAURUS: Mass2 start
    /* Set the mass-properties when the rigid-body is created. */
    let rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
        .setAdditionalMass(0.5)
        // Sets both the mass and angular inertia at once.
        .setAdditionalMassProperties(
            0.5,                                // Mass.
            { x: 0.0, y: 1.0, z: 0.0 },         // Center of mass.
            { x: 0.3, y: 0.2, z: 0.1 },         // Principal angular inertia.
            { w: 1.0, x: 0.0, y: 0.0, z: 0.0 }  // Principal angular inertia frame (unit quaternion).
        );
    let rigidBody = world.createRigidBody(rigidBodyDesc);
    // DOCUSAURUS: Mass2 stop
}

{
    // DOCUSAURUS: LockedAxes1 start
    /* Lock translations/rotations when the rigid-body is created. */
    let rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
        .lockTranslations() // prevent translations along along all axes.
        .lockRotations()   // prevent rotations.
        .enabledRotations(true, false, false); // only enable rotations along the X axis.
    let rigidBody = world.createRigidBody(rigidBodyDesc);
    // DOCUSAURUS: LockedAxes1 stop
}