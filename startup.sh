#!/bin/bash

cd ./api && docker image build -t img-sem-api . --no-cache &&
cd ../monitoring && docker image build -t img-sem-monitoring . --no-cache  &&
cd ../testharness/user && docker image build -t img-sem-fakeuser . --no-cache &&
cd ../inventory && docker image build -t img-sem-fakeinventory . --no-cache &&
cd ../../ && docker-compose up
