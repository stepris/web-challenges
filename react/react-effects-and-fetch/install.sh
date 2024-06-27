#!/bin/bash

# Loop through all directories and run npm install
for dir in */; do
  if [ -d "$dir" ]; then
    echo "Running npm install in $dir"
    (cd "$dir" && npm install)
  fi
done

