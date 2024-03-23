#!/bin/bash

compose_files="-f docker-compose.base.yml -f docker-compose.dev.yml"

# Remove the services and the volume
podman-compose $compose_files down -v