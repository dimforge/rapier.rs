#!/bin/bash

yarn run build
rsync -av --delete-after build/rapier/ crozet@ssh.cluster003.hosting.ovh.net:/home/crozet/rapier/
