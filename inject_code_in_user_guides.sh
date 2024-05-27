#!/bin/bash
set -v

DRY_RUN="${DRY_RUN:-0}"
KEEP_TMP="${KEEP_TMP:-0}"
PRINT_DIFF="${PRINT_DIFF:-1}"
PUBLISH_MODE="${PUBLISH_MODE:-0}"

echo $DRY_RUN
echo $KEEP_TMP
echo $PRINT_DIFF

cd docs-examples/inject_file

mkdir -p tmp_inject

for path in "$@"
do
    file_to_inject="../../$path"
    tmp_file="tmp_inject/$path"
    diff_file="tmp_diff/$path"

    echo $file_to_inject
    mkdir -p "$(dirname $tmp_file)"
    
    cargo run --quiet --release "$file_to_inject" > "$tmp_file"
    if [ $PRINT_DIFF -eq 1 ]; then
        if cmp -s "$file_to_inject" "$tmp_file"; then
            echo "No substitution on $tmp_file"
        else
            mkdir -p "$(dirname $diff_file)"
            diff $file_to_inject $tmp_file > "$diff_file".diff
        fi
    fi
    if [ ! $DRY_RUN ]; then
        cat "$tmp_file" > "$file_to_inject"
        
        if [ $PUBLISH_MODE -eq 0 ]; then
            path_target="../../docs/user_guides/templates_injected/${path#*/}"
            mkdir -p "$(dirname $path_target)"
            cp $tmp_file $path_target
        fi
    fi
done

if [ ! $KEEP_TMP ]; then
    rm -rf tmp_inject
    rm -rf tmp_diff
fi
