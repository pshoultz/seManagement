#!/bin/bash

cd ./api && docker image build -t img-sem-api . &&
cd ../monitoring && docker image build -t img-sem-monitoring . &&
cd ../testharness/user && docker image build -t img-sem-fakeuser . &&
cd ../inventory && docker image build -t img-sem-fakeinventory . &&
cd ../../ && docker-compose up
