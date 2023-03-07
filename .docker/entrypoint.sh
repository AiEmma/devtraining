#!/bin/bash

npm install
npm run build
npx tyorm migration:run -d dist/database.providers.js
npm run start:dev