#!/bin/sh

if [[ $(git status -s) ]]
then
    echo "The working directory is dirty. Please commit any pending changes."
    # exit 1;
fi

echo "Deleting old buildation"
rm -rf build
mkdir build
rm -rf .git/worktrees/build/

echo "Checking out gh-pages branch into build"
git worktree add -B gh-pages build origin/gh-pages

echo "Removing existing files"
rm -rf build/*

echo "Generating site"
yarn build
# hugo -D

echo "Updating gh-pages branch"
cd build && git add --all && git commit -m "Publishing to gh-pages (publish.sh)"

echo "Push to origin"
git push origin gh-pages
