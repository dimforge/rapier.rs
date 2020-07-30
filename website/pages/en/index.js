/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="" img_src={imgUrl('rapier_logo_color_notext.svg')}>
    <img src={props.img_src} width="70%" alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {/*{siteConfig.title}*/}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
          <div className="inner">
              <Logo img_src={imgUrl('rapier_logo_color.svg')} />

              <ProjectTitle />

              <PromoSection>
              {/*<Button href="https://discourse.nphysics.org">User forum</Button>*/}
              <Button href="https://github.com/dimforge/rapier">View on Github</Button>
              <Button href="https://discord.gg/vt9DJSW">Join us on Discord</Button>
            {/*<Button href={docUrl('doc1.html', language)}>Example Link</Button>*/}
            {/*<Button href={docUrl('doc2.html', language)}>Example Link 2</Button>*/}
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top' ]}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} className={props.className} />
  </Container>
);

const Desc2 = () => (
    <Block background="light" layout="threeColumn">
        {[

        ]}
    </Block>
)
const Features = () => (
    <Block background="light" layout="threeColumn">
        {[
            {
                content: 'Fast physics for games, animation and robotics. Runs cross-platform, including the official support ' +
                    'of web platforms.',
                image: imgUrl('undraw_physics_simulation.svg'),
                imageAlign: 'top',
                title: 'Multi-platforms physics simulations',
            },
            {
                content: 'Use serialization to take or restore a complete snapshot of the ' +
                    'instantaneous state of the physics simulation.',
                image: imgUrl('undraw_snapshot.svg'),
                imageAlign: 'top',
                title: 'Take and restore snapshots',
            },
            {
                content: 'Optionally make Rapier cross-platform deterministic on all IEEE 754-2008 compliant 32- and ' +
                    '64-bits platforms.',
                image: imgUrl('undraw_determinism.svg'),
                imageAlign: 'top',
                title: 'Bit-level cross-platform determinism',
            },
            {
                content: 'Use our official NPM packages published behind the [@dimforge](https://www.npmjs.com/search?q=%40dimforge) ' +
                    'namespace and run Rapier in any modern browser. Rapier is one of the fastest web physics engine ' +
                    'available.',
                image: imgUrl('undraw_web.svg'),
                imageAlign: 'top',
                title: 'WebAssembly and JavaScript support',
            },
            {
                content: 'Built with Open-Source at heart, Rapier aims to empower the Rust and web communities ' +
                    'with a free, cross-platform, and efficient, solid physics simulation framework.',
                image: imgUrl('undraw_open_source.svg'),
                imageAlign: 'top',
                title: 'Forever free and Open-Source',
            },
        ]}
    </Block>
);


const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users.filter(user => user.pinned).map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img src={user.image} alt={user.caption} title={user.caption} />
    </a>
  ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using This?</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          {/*<LearnHow />*/}
          {/*<TryOut />*/}
            <Features />
          {/*<Description />*/}
          {/*<Showcase language={language} />*/}
        </div>
      </div>
    );
  }
}

module.exports = Index;
