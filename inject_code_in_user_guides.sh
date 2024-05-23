#!/bin/bash
set -v

DRY_RUN=${DRY_RUN:-0}
KEEP_TMP=${KEEP_TMP:-0}
PRINT_DIFF=${KEEP_TMP:-0}

echo $DRY_RUN
echo $KEEP_TMP

cd docs-examples/inject_file

mkdir -p tmp_inject

for path in "$@"
do
    file_to_inject="../../$path"
    tmp_file="tmp_inject/$path"

    echo $file_to_inject
    mkdir -p "$(dirname $tmp_file)"
    
    cargo run --quiet --release "$file_to_inject" > "$tmp_file"
    if [ $PRINT_DIFF -eq 1 ]; then
        diff "$file_to_inject" "$tmp_file"
    fi
    if [ ! $DRY_RUN ]; then
        cat "$tmp_file" > "$file_to_inject"
    fi
done

if [ ! $KEEP_TMP ]; then
    rm -rf tmp_inject
fi
