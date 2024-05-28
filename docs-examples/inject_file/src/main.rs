use std::fs::read_to_string;

use regex::{Captures, Regex};

fn main() {
    let args = std::env::args().collect::<Vec<_>>();
    let input_path = args
        .get(1)
        .expect("Expected 1 argument: the path to the file to parse.");
    let file: &str = &read_to_string(&input_path)
        .expect(&format!("Could not read file at input {}", input_path));

    // Regex to find "<load" tags and capture their info (path + marker)
    let re = Regex::new(r"<load path='(.*)'.*marker='(.*)'.*>").unwrap();

    let result = re.replace_all(file, |caps: &Captures| {
        let infos = &caps.extract::<2>().1;
        assert!(
            infos.len() == 2,
            "load tag encountered without a path or marker"
        );
        let mut path = "..".to_string();
        path.push_str(infos[0]);
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
        to_keep.join("")
    });
    print!("{result}");
}
