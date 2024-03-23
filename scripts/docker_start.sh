#!/bin/bash

for dir in ../*; do
  echo "$dir"
done

DOCKER_COMPOSE_PATH="/usr/local/bin/docker-compose"

"$DOCKER_COMPOSE_PATH" -f ../server/docker-compose.yml  up -d --remove-orphans
