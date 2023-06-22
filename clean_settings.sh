#!/bin/sh

# Set the source and destination paths
SOURCE_PATH="/src/settings.js.clean"
DESTINATION_PATH="/src/settings.js"

# Check if the file exists
if [ ! -f "$SOURCE_PATH" ]; then
  echo "Clean settings do not exist. Erroring!"
  exit 1
fi

cp "$SOURCE_PATH" "$DESTINATION_PATH"
