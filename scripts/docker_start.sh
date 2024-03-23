#!/bin/bash

DOCKER_COMPOSE_PATH="/usr/local/bin/docker-compose"

"$DOCKER_COMPOSE_PATH" -f ../server/docker-compose.yml  up -d --remove-orphans
