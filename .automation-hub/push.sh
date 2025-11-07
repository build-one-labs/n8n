#!/bin/bash

# run this script with the n8n version we want to base the b1 image on
# for example
# .automation-hub/push.sh n8n@1.26.0

VERSION=$1
if [ -z ${VERSION} ]; then
 echo n8n version is required as first parameter to this script
 exit 1;
fi;

docker login docker.cloudsmith.io -u ${BUILDONE_USER} -p ${BUILDONE_TOKEN}
docker push "docker.cloudsmith.io/buildone/repository/n8n-custom:${VERSION}"
