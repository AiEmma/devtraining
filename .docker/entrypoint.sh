#!/bin/bash

npm install
npm run build
npx tyorm migration:run
npm run start:dev