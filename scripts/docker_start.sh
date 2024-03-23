#!/bin/bash

echo "$PWD"

DOCKER_COMPOSE_PATH="/usr/local/bin/docker-compose"

"$DOCKER_COMPOSE_PATH" -f "$PWD"/../server/docker-compose.yml  up -d --remove-orphans
