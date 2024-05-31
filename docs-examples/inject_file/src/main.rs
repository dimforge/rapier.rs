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
    match result {
        Ok(result) => {
            print!("{result}");
        }
        Err(error) => {
            for e in error.errors {
                match e {
                    ErrorType::IncorrectTag => {
                        eprintln!("❌ ERROR: a <load> tag was incorrectly written in {}, maybe missing path or marker, or not using `'` for string delimiters ?", input_path);
                    }
                    ErrorType::IncorrectMarker(IncorrectMarker { marker, filepath }) => {
                        eprintln!("❌ ERROR: marker {} not found in {}", marker, filepath);
                    }
                }
            }
            if let Some(result) = error.result {
                print!("{result}");
            }
        }
    }
}

#[derive(Debug)]
pub struct IncorrectMarker {
    pub marker: String,
    pub filepath: String,
}

#[derive(Debug)]
pub enum ErrorType {
    IncorrectTag,
    IncorrectMarker(IncorrectMarker),
}
#[derive(Debug)]
pub struct InjectError<'a> {
    /// Contains the best result we could do.
    pub result: Option<Cow<'a, str>>,
    /// Errors encountered
    pub errors: Vec<ErrorType>,
}

fn injected(source_text: &str, get_path: fn(&str) -> String) -> Result<String, InjectError> {
    let re = Regex::new(r"<load.*>").unwrap();
    let total_to_inject = re.find_iter(source_text).count();
    let mut injected_count = 0;
    // Regex to find "<load" tags and capture their info (path + marker)
    let re = Regex::new(r"<load path='(.*)'.*marker='(.*)'.*>").unwrap();

    let mut error = InjectError {
        result: None,
        errors: Vec::new(),
    };
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
                injected_count += 1;
                to_keep.1[0]
            })
            .collect::<Vec<_>>();
        if to_keep.len() == 0 {
            error
                .errors
                .push(ErrorType::IncorrectMarker(IncorrectMarker {
                    marker: infos[1].to_string(),
                    filepath: infos[0].to_string(),
                }));
        }
        to_keep.join("")
    });
    if (injected_count + error.errors.len()) != total_to_inject {
        error.errors.push(ErrorType::IncorrectTag);
    }
    if 0 < error.errors.len() {
        return Err(error);
    }
    let re = Regex::new(r"(.*\/\/ DOCUSAURUS:.*[\r\n|\n])").unwrap();
    let result = result.replace("\r\n", "\n");
    let result = re.replace_all(&result, |_: &Captures| "");
    Ok(result.to_string())
}

#[test]
fn simple_injection() {
    use crate::*;

    let result = injected(
        "<load path='test/to_inject1.txt' marker='ToInject1_1' />",
        |path| path.to_string(),
    );

    // Trimming end for cross platform, on windows I had \r finishing result.
    assert_eq!(
        result.expect("This should not error out").trim_end(),
        "correct data1 1"
    );
}

#[test]
fn simple_marker_short() {
    use crate::*;

    let result = injected(
        "<load path='test/to_inject1.txt' marker='ToInject' />",
        |path| path.to_string(),
    );

    // Trimming end for cross platform, on windows I had \r finishing result.
    assert_eq!(
        result.expect("This should not error out").trim_end(),
        "correct data short"
    );
}

#[test]
fn simple_nest_removal() {
    use crate::*;

    let result = injected(
        "<load path='test/to_inject1.txt' marker='ToInject1_nest' />",
        |path| path.to_string(),
    );

    // Trimming end for cross platform, on windows I had \r finishing result.
    assert_eq!(
        result.expect("This should not error out").trim_end(),
        "correct data nest1
correct data nested
correct data nest2"
    );
}

#[test]
fn simple_tag_error() {
    use crate::*;

    let result = injected(
        "<load path='test/to_inject1.txt' marker=\"ToInject1_1\" />",
        |path| path.to_string(),
    );

    // Trimming end for cross platform, on windows I had \r finishing result.
    assert!(matches!(
        result.expect_err("This should error out").errors[0],
        ErrorType::IncorrectTag
    ));
}

#[test]
fn simple_marker_error() {
    use crate::*;

    let result = injected(
        "<load path='test/to_inject1.txt' marker='ToInject1_wrong' />",
        |path| path.to_string(),
    );

    // Trimming end for cross platform, on windows I had \r finishing result.
    assert!(matches!(
        &result.expect_err("This should error out").errors[0],
        IncorrectMarker
    ));
}
