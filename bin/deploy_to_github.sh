#!/usr/bin/env/ bash

rm -rf dist
pnpm run build 
cd dist
git init .
git add .
git commit -m deploy
git remote add origin git@github.com:king-open/starsMoney.git
git push -f origin main:main
cd -
