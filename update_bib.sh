#!/bin/bash
# -----------------------------------------------
# update_bib.sh
# 自动更新 _bibliography/my_publications.bib
# -----------------------------------------------

# === 1. 设置源文件路径（请修改这一行） ===
SOURCE_BIB="/Users/Junming/Library/Mobile Documents/com~apple~CloudDocs/my_publications.bib"

# === 2. 设置目标路径（一般不改） ===
TARGET_DIR="_bibliography"
TARGET_FILE="$TARGET_DIR/my_publications.bib"

# === 3. 检查源文件是否存在 ===
if [ ! -f "$SOURCE_BIB" ]; then
  echo "❌ Error: 源文件不存在：$SOURCE_BIB"
  exit 1
fi

# === 4. 确保目标目录存在 ===
mkdir -p "$TARGET_DIR"

# === 5. 执行复制操作 ===
cp "$SOURCE_BIB" "$TARGET_FILE"

# === 6. 提示成功 ===
echo "✅ 已更新 bibliography 文件："
echo "   $SOURCE_BIB → $TARGET_FILE"

