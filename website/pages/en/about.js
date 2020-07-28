/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

class About extends React.Component {
  render() {
    const language = this.props.language || '';
    const supportLinks = [
      {
        content: 'Any crate in the scope of numerical simulation are welcome to be integrated to this organization.' +
                 ' However, only crates which are documented (at minima on [docs.rs](https://docs.rs)) and sufficiently developed to be useful can be accepted.' +
                 ' All crate part of this organization will be featured on [rustsim.org](https://rustsim.org) and will have a category given on the rustsim user' +
                 ' forum (and users will be welcome to ask their questions about this crate there!) You can submit a request to joint this organization by opening an issue on the [rustsim.org bug tracker](https://github.com/rustsim/rustsim.org/issues).',
        title: 'Join the organization',
      },
      {
        content: "If you need help regarding the use of any crate part of the rustsim **organization**, you may either (in order of preference):" +
            "<ul><li>Ask a question on the [rustsim user forum](https://discourse.nphysics.org). There is one category per crate.</li>" +
            "<li>Ask a question on [Discord](https://discord.gg/vt9DJSW).</li>" +
            "<li>Ask a question on IRC #rust and #rust-gamedev, or on discord `general` or `gamedev`.</li>" +
            "<li>Open an issue on the relevant crate's repository.</li>" +
            "</ul>",
        title: 'Get help',
      },
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>About the rustsim organization</h1>
            </header>
              <p>The <b>rustsim</b> organization is dedicated to offer pure-Rust high-quality multi-platforms libraries for performing various types of numerical simulations.
               The targetted applications can cover a wide set of natural phenomena with various performance characteristics, including real-time
               as well as offline simulations. As of today, most crates parts of this organization are focused on real-time physics (mechanics) for animation,
               robotics, and video games. Contributions to creates new crates intended to cover more fields (like sound-synthesis, simulation
                of biological systems, geology, etc.) are very welcome.</p>
            <GridBlock contents={supportLinks} layout="threeColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = About;
