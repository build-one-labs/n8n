#!/bin/bash

# run this script with the n8n version we want to base the b1 image on
# for example
# .automation-hub/build.sh n8n@1.26.0

VERSION=$1
if [ -z ${VERSION} ]; then
 echo n8n version is required as first parameter to this script
 exit 1;
fi;

pnpm i -g pnpm

pnpm install
node scripts/build-n8n.mjs

docker buildx build --build-arg TARGETPLATFORM=linux/amd64 --build-arg LAUNCHER_VERSION=1.1.3 -t n8n-custom:base -f docker/images/n8n/Dockerfile .
docker buildx build -t "docker.cloudsmith.io/buildone/repository/n8n-custom:${VERSION}" -f .automation-hub/Dockerfile .