#!/bin/sh

# Set the source and destination paths
SOURCE_PATH="/src/settings.js.smudged"
DESTINATION_PATH="/src/settings.js"

# Check if the file exists
if [ ! -f "$SOURCE_PATH" ]; then
  echo "Smudged settings do not exist. Skipping."
  exit 0
fi

cp "$SOURCE_PATH" "$DESTINATION_PATH"
