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
      // {
      //   content: 'Any crate in the scope of numerical simulation are welcome to be integrated to this organization.' +
      //            ' However, only crates which are documented (at minima on [docs.rs](https://docs.rs)) and sufficiently developed to be useful can be accepted.' +
      //            ' All crate part of this organization will be featured on [rapier.org](https://rapier.org) and will have a category given on the rapier user' +
      //            ' forum (and users will be welcome to ask their questions about this crate there!) You can submit a request to joint this organization by opening an issue on the [rapier.org bug tracker](https://github.com/rapier/rapier.org/issues).',
      //   title: 'Join the organization',
      // },
      {
        content: "If you need help regarding the use of any crate developed by Dimforge, you may either (in order of preference):" +
            "<ul><li>Ask a question on the [dimforge user forum](https://discourse.dimforge.com). There is one category per crate.</li>" +
            "<li>Ask a question on [Discord](https://discord.gg/vt9DJSW).</li>" +
            "<li>Ask a question on IRC #rust and #rust-gamedev, or on discord `general` or `gamedev` by mentioning **@sebcrozet** directly.</li>" +
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
              <h1>About us</h1>
            </header>
              <p>We are <b>Dimforge</b>, an open-source company born from the former Rustsim organization. We are dedicated to offer pure-Rust high-quality
                  multi-platform crates for performing various types of numerical simulations. This includes <a href="https://github.com/dimforge/rapier">rapier</a> 
                  for real-time physics, <a href="https://github.com/nalgebra">nalgebra</a> for linear-algebra, and <a href="https://github.com/dimforge">simba</a> for number
                  abstractions. Check out all our open-source projects <a href="https://github.com/dimforge)">on GitHub</a>.</p>
            <GridBlock contents={supportLinks} layout="threeColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = About;
