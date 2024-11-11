TARGET_FOLDER="docs"

# Initialize an empty JSON array
echo "[]" > file_tree.json

# Traverse all files and folders in the target folder
find "$TARGET_FOLDER" -type d | while read -r dir; do
  # Check for _category_.json in the folder
  if [ -f "$dir/_category_.json" ]; then
    # Extract the 'label' field from the _category_.json
    label=$(jq -r '.label' "$dir/_category_.json")

    # If label is null or empty, default to folder name
    [ -z "$label" ] && label=$(basename "$dir")

    # Add folder to the JSON array
    jq --arg path "$dir" --arg title "$label" \
      '. += [{"path": $path, "title": $title, "type": "folder"}]' \
      file_tree.json > tmp.json && mv tmp.json file_tree.json
  fi
done

# Traverse all Markdown files in the target folder
find "$TARGET_FOLDER" -type f -name "*.md" | while read -r file; do
  # Extract file path relative to the folder
  relative_path="${file#"$TARGET_FOLDER/"}"

  # Extract the title from the Markdown file (e.g., first-level heading)
  title=$(grep -m 1 "^# " "$file" | sed 's/^# //')

  # If no title is found, use the filename without extension
  if [ -z "$title" ]; then
    title=$(basename "$file" .md)
  fi

  # Add a JSON object for the file
  jq --arg path "$relative_path" --arg title "$title" \
    '. += [{"path": $path, "title": $title, "type": "file"}]' \
    file_tree.json > tmp.json && mv tmp.json file_tree.json
done

# Output the generated JSON
cat file_tree.json