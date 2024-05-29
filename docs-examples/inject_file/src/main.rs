use std::{borrow::Cow, fs::read_to_string};

use regex::{Captures, Regex};

fn main() {
    let args = std::env::args().collect::<Vec<_>>();
    let input_path = args
        .get(1)
        .expect("Expected 1 argument: the path to the file to parse.");
    let file: &str = &read_to_string(&input_path)
        .expect(&format!("Could not read file at input {}", input_path));

    let result = injected(file, |file_path| {
        let mut path = "..".to_string();
        path.push_str(&file_path);
        path.to_string()
    });
    print!("{result}");
}

fn injected(source_text: &str, get_path: fn(&str) -> String) -> Cow<str> {
    // Regex to find "<load" tags and capture their info (path + marker)
    let re = Regex::new(r"<load path='(.*)'.*marker='(.*)'.*>").unwrap();

    let result = re.replace_all(source_text, |caps: &Captures| {
        let infos = &caps.extract::<2>().1;
        assert!(
            infos.len() == 2,
            "load tag encountered without a path or marker"
        );
        let path = get_path(infos[0]);
        // Reading file from the path of the tag of input file
        let to_inject = read_to_string(&path).expect(&format!("could not read path: {}", path));

        // Regex to find the markers inside comments, and only print what's inside
        // FIXME: I think we should just paste all the inside,
        // and then remove all "// DOCUSAURUS*"" lines, to allow reuse of a same file.
        let regex = format!(
            r"// DOCUSAURUS: {} start(?:\r\n|\n)((?:\s|.)*)\s+\/\/ DOCUSAURUS: {} stop",
            infos[1], infos[1]
        );
        let re = Regex::new(&regex).unwrap();
        let to_keep = re
            .captures_iter(&to_inject)
            .map(|c| {
                let to_keep = c.extract::<1>();
                to_keep.1[0]
            })
            .collect::<Vec<_>>();
        if to_keep.len() == 0 {
            eprintln!("ERROR: marker {} not found in {}", infos[1], infos[0]);
        }
        to_keep.join("")
    });
    result
}

#[test]
fn simple_injection() {
    use crate::*;

    let result = injected(
        "<load path='test/to_inject1.txt' marker='ToInject1_1' />",
        |path| path.to_string(),
    );
    // Trimming end for cross platform, on windows I had \r finishing result.
    assert_eq!(result.trim_end(), "correct data1 1");
}
