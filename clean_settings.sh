#!/bin/bash

# Set the source and destination paths
SOURCE_PATH="./src/settings.js.clean"

# Check if the file exists
if [ ! -f "$SOURCE_PATH" ]; then
  # Clean settings do not exist. Erroring!
  exit 69
fi

cat "$SOURCE_PATH"
