#!/bin/bash

export DB_PASSWORD="$DB_PASSWORD"
export DB_USERNAME="$DB_USERNAME"
export DB_NAME="$DB_NAME"
export DB_PORT="$DB_PORT"
export DB_CLIENT_USERNAME="$DB_CLIENT_USERNAME"
export DB_CLIENT_PASSWORD="$DB_CLIENT_PASSWORD"
export DB_CLIENT_PORT="$DB_CLIENT_PORT"

DOCKER_COMPOSE_PATH="/usr/local/bin/docker-compose"

"$DOCKER_COMPOSE_PATH" -f /agsl/server/docker-compose.yml up -d --remove-orphans
