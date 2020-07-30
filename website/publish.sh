#!/bin/bash

yarn build
cp .htaccess build/.
rsync -av --delete-after build/ crozet@ssh.cluster003.hosting.ovh.net:/home/crozet/rapier/
