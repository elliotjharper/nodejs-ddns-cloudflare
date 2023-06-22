#!/bin/sh

# Set the source and destination paths
SMUDGED_SOURCE_PATH="/src/settings.js.smudged"
CLEAN_SOURCE_PATH="/src/settings.js.clean"

# Check if the file exists
if [ ! -f "$SMUDGED_SOURCE_PATH" ]; then
  # Smudged settings do not exist. Output the clean settings instead
  cat "$CLEAN_SOURCE_PATH"
  exit 0
fi

cat "$SMUDGED_SOURCE_PATH"