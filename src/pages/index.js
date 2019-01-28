import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faTwitter, faInstagram, faSpotify } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

import profilePhoto from "../../static/johnnie-regalado-photo-removebg.png"
import myResume from "../../static/resume-2019.pdf"

export default () => (
  <div className="layout">
    <header className="header">
      <h1 className="header__title">Johnnie Regalado</h1>
      <h2 className="header__subtitle">Web Developer</h2>
      <h5 className="header__slogan">Make.</h5>
      <h5 className="header__slogan">Create.</h5>
      <h5 className="header__slogan">Produce.</h5>
      <img
        className="header__photo"
        src={profilePhoto}
        alt="A photo of Johnnie Regalado, who made this site, and is a pretty cool dude."
      />
      <div className="header__social-links social-links">
        <div
          className="social-links__wrapper"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a href="https://github.com/johnniereg">
            <FontAwesomeIcon
              icon={faGithub}
              className="social-links__icon"
              size="lg"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/johnnie-regalado/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="social-links__icon"
              size="lg"
            />
          </a>
          <a
            href="https://twitter.com/johnniereg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="social-links__icon"
              size="lg"
            />
          </a>
          <a
            href="https://www.instagram.com/johnniereg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="social-links__icon"
              size="lg"
            />
          </a>
          <a
            href="https://open.spotify.com/user/johnniereg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faSpotify}
              className="social-links__icon"
              size="lg"
            />
          </a>
          <a href="mailto:johnniereg@gmail.com?subject=Hey Johnnie! What's up? I'm writing you from your personal site">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="social-links__icon"
              size="lg"
            />
          </a>
        </div>
      </div>
    </header>
    <main className="main">
      <section className="lander">
        <p className="lander__text">
          <strong>Hello, World!</strong> My name is Johnnie Regalado and I'm a
          web developer. Thanks for stopping by my little slice of the internet.
        </p>
        <p className="lander__text">
          This is not the first personal website I've ever built, and it likey
          will not be the last. But, until I get that itch again,{" "}
          <strong>I'd really love to collaborate</strong> on your project.
        </p>
        <p className="lander__text">
          I'm a <strong>communicative, confident and compassionate</strong>{" "}
          coder who can take your idea from a tiny spark to a roaring fire. Or,
          I can throw on firefighting gear and help you get the wildfire under
          control.
        </p>
        <p className="lander__text">
          By day, I'm slinging code with{" "}
          <a href="https://www.pixelunion.net/" target="_blank" rel="noopener noreferrer">Pixel Union</a>'s Agency. We
          build custom eCommerce solutions with Shopify (and sometimes WordPress
          or React) that help merchants sell more.
        </p>
        <p className="lander__text">
          By night, when I'm not tinkering with more code, I'm watching or
          playing hockey, going to the movies, gaming, meditating or cooking.
        </p>
        <p className="lander__text">
          Sometimes people like looking at{" "}
          <strong>a big list of languages</strong> that someone has experience
          with. In no particular order, other than what I remembered them in,
          here's mine:
        </p>
        <p className="lander__text">
          <strong>
            JavaScript, React, jQuery, Node, Express, HTML, CSS, SASS, Webpack,
            Liquid, PHP, Ruby, Rails, Solidity, Git, GitHub, WordPress, Shopify,
            Gatsby, Squarespace, Heroku, Netlify, Flywheel
          </strong>
        </p>
        <p className="lander__text">
          If you want to know more about my professional experience, have a look
          at{" "}
          <a href={myResume} target="_blank">
            my resume
          </a>
          .
        </p>
        <p className="lander__text">
          If you've got a big idea, need support for a small project, or just
          want to chat and grab a coffee,{" "}
          <a href="mailto:johnniereg@gmail.com?subject=Hey Johnnie! What's up? I'm writing you from your personal site">
            get in touch
          </a>
          .
        </p>
      </section>
    </main>
  </div>
);
