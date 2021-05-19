module.exports = {
  docs: [
    'about_rapier',
    {
      'User Guides': [
        {
          'Rust': [
            'user_guides/rust/getting_started',
            'user_guides/rust/simulation_pipelines',
            'user_guides/rust/rigid_bodies',
            'user_guides/rust/colliders',
            'user_guides/rust/joints',
            'user_guides/rust/scene_queries',
            'user_guides/rust/advanced_collision_detection',
            'user_guides/rust/determinism',
            'user_guides/rust/serialization',
            'user_guides/rust/the_rapier_testbed',
            'user_guides/rust/common_mistakes',
            'user_guides/rust/common_recipes',

            // 'user_guides/rust/rigid_body_simulation',
            // 'user_guides/rust/joint_constraints',
            // 'user_guides/rust/event_handling_and_sensors',
            // 'user_guides/rust/integration_parameters',
            // 'user_guides/rust/conclusion'
          ],
          'Rust Bevy Plugin': [
            'user_guides/rust_bevy_plugin/getting_started',
            'user_guides/rust_bevy_plugin/the_rapier_physics_plugin',
            'user_guides/rust_bevy_plugin/the_rapier_debug_renderer'
          ],
          'JavaScript': [
            'user_guides/javascript/getting_started',
            'user_guides/javascript/rigid_body_simulation',
            'user_guides/javascript/physics_event_handling'
          ],
        }],
    },
    {
      'API Documentation': [
        'api/javascript/JavaScript2D',
        'api/javascript/JavaScript3D',
        {
          type: 'link',
          label: 'rapier2d ↪',
          href: 'https://docs.rs/rapier2d'
        },
        {
          type: 'link',
          label: 'rapier3d ↪',
          href: 'https://docs.rs/rapier3d'
        },
        {
          type: 'link',
          label: 'rapier2d-f64 ↪',
          href: 'https://docs.rs/rapier2d-f64'
        },
        {
          type: 'link',
          label: 'rapier3d-f64 ↪',
          href: 'https://docs.rs/rapier3d-f64'
        },
      ],
    }
  ],
};
