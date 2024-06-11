import { World, RigidBodyDesc, RigidBodyType } from '@dimforge/rapier2d';

function setup() {
    // DOCUSAURUS: Setup start
    // The world that will contain our rigid-bodies.
    let world = new World({ x: 0.0, y: -9.81 });

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
        .setTranslation(0.0, 5.0)
        // The rigid body rotation.
        // Default: no rotation.
        .setRotation(5.0)
        // The linear velocity of this body.
        // Default: zero velocity.
        .setLinvel(1.0, 2.0)
        // The angular velocity of this body.
        // Default: zero velocity.
        .setAngvel(2.0)
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
setup();


function creation() {
    let world = new World({ x: 0.0, y: -9.81 });

    /* Set the position when the rigid-body is created. */
    let rigidBodyDesc = RigidBodyDesc.dynamic()
        // The rigid body translation.
        // Default: zero vector.
        .setTranslation(0.0, 5.0)
        // The rigid body rotation.
        // Default: no rotation.
        .setRotation(5.0);
    let rigidBody = world.createRigidBody(rigidBodyDesc);
}

creation()