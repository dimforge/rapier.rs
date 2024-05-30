#!/bin/bash
set -ve

echo $1
echo $2

if [ $1 == "--help" ]; then
    echo "USAGE: $0 [branch1 [branch2]]
    branch1 default: - (previous branch) FIXME: Currently only supports comparison with a branch without injection.
    branch2 default: . (current branch)
    
    "
    exit;
fi

(
    # "-" in git means previous branch
    BRANCH_1="${1:--}"
    # "." in git means' current branch
    BRANCH_2="${2:-.}"

    git checkout $BRANCH_2

    FILENAMES=`find docs/user_guides/templates/ -type f`
    OUTPUT_FOLDER=tmp_diff_branches/branch1_templates_injected/ ./inject_code_in_user_guides.sh $FILENAMES
    exit;
    git checkout $BRANCH_1
    # FIXME: Currently comparing with master, where there is not the injected files.
    # Once master has injected file we'll have to generate them before comparing.
    # find docs/user_guides/templates/ -type f -print0 | OUTPUT_FOLDER=tmp_diff_branches/branch2_templates_injected/ xargs -0 ./inject_code_in_user_guides.sh
    # diff tmp_diff_branches/branch1_templates_injected/ tmp_diff_branches/branch2_templates_injected/ > tmp_total_diff.diff
    git diff --no-index -w docs/user_guides/templates/ tmp_diff_branches/branch1_templates_injected/ > total_diff.diff
)