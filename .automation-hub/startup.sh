#!/bin/bash

if [ ! -f "~/.n8n/database.sqlite" ]; then
mkdir -p ~/.n8n
 cp .automation-hub/database.sqlite ~/.n8n/database.sqlite
fi 

pnpm run start