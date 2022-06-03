#!/bin/bash

docker build -t jomartz/pwa-template:v0.1 . --no-cache
docker image push jomartz/pwa-template:v0.1