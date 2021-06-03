#!/bin/bash

cp -r docs/user_guides/templates/*.mdx docs/user_guides/rust/.
cp -r docs/user_guides/templates/*.mdx docs/user_guides/rust_bevy_plugin/.

# See https://serverfault.com/a/137848
find docs/user_guides/templates/rust_bevy_plugin/ -type f -print0 | xargs -0 sed '\:<rapier>:,\:</rapier>:d'
find docs/user_guides/templates/rust/ -type f -print0 | xargs -0 sed '\:<bevy>:,\:</bevy>:d'
