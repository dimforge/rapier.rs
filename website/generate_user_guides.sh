#!/bin/bash

cp -r docs/user_guides/templates/*.mdx docs/user_guides/rust/.
cp -r docs/user_guides/templates/*.mdx docs/user_guides/rust_bevy_plugin/.

find docs/user_guides/rust_bevy_plugin/ -type f -print0 | xargs -0 gawk -i inplace -v RS='<rapier>[^<]*</rapier>' -v ORS= '1'
find docs/user_guides/rust_bevy_plugin/ -type f -print0 | xargs -0 sed -i '/<rapier>/,/<\/rapier>/d'
find docs/user_guides/rust_bevy_plugin/ -type f -print0 | xargs -0 sed -i 's\<bevy>\\g'
find docs/user_guides/rust_bevy_plugin/ -type f -print0 | xargs -0 sed -i 's\</bevy>\\g'

find docs/user_guides/rust/ -type f -print0 | xargs -0 gawk -i inplace -v RS='<bevy>[^<]*</bevy>' -v ORS= '1'
find docs/user_guides/rust/ -type f -print0 | xargs -0 sed -i '/<bevy>/,/<\/bevy>/d'
find docs/user_guides/rust/ -type f -print0 | xargs -0 sed -i 's\<rapier>\\g'
find docs/user_guides/rust/ -type f -print0 | xargs -0 sed -i 's\</rapier>\\g'
