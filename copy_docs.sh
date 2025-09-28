#! /bin/sh

rm -rf static/javascript3d
mkdir static/javascript3d
cp -r ../rapier.js/builds/rapier3d/docs/* static/javascript3d/.

rm -rf static/javascript2d
mkdir static/javascript2d
cp -r ../rapier.js/builds/rapier2d/docs/* static/javascript2d/.
