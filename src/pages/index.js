import React from "react"

import profilePhoto from "../../static/johnnie-regalado-photo-removebg.png";

export default () => (
  <div className="layout">
    <header className="header">
      <h1 className="header__title">Johnnie Regalado</h1>
      <h2 className="header__subtitle">Web Developer</h2>
      <img className="header__photo" src={ profilePhoto } alt="A photo of Johnnie Regalado, who made this site, and is a pretty cool dude." />
      <div className="social-links">
        <img className="social-links__icon" src="https://source.unsplash.com/random/24x24" alt="A social media icon for GitHub"/>
        <img className="social-links__icon" src="https://source.unsplash.com/random/24x24" alt="A social media icon for Twitter"/>
        <img className="social-links__icon" src="https://source.unsplash.com/random/24x24" alt="A social media icon for Instagram"/>
        <img className="social-links__icon" src="https://source.unsplash.com/random/24x24" alt="A social media icon for LinkedIn"/>
      </div>
    </header>
    <main className="main">
      <section className="about">
        <h1 className="about_title">About</h1>
        <h2 className="about_subtitle">Make. Create. Produce.</h2>
        <p className="about__text">
          Hello, World! My name is Johnnie and I'm a web developer. Thanks for stopping by my little slice of the internet.
        </p>
        <p className="about__text">
          This is not the first personal website I've ever built, and it likey will not be the last. But, until I get that itch again. What I'd really love is to collaborate on your project.
        </p>
        <p className="about__text">
          I'm a communicative, confident and compassionate coder who can take your idea from a tiny spark to a roaring fire. Or, I can throw on firefighting gear and help you get the wildfire under control.
        </p>
        <p className="about__text">
          By day, I'm slinging code at Pixel Union, building custom eCommerce solutions with Shopify (and sometimes WordPress or React) that help merchants sell more. By night, I'm watching (and sometimes playing) hockey, going to the movies, playing video games, meditating, or making a wicked dinner.
        </p>
        <p className="about__text">
          I started coding professionally in late 2017, but my first developer forays date back to embedding my favourite songs into my MySpace page and hacking my install of Medal of Honor to get top score (sorry...).
        </p>
        <p className="about__text">
          What makes me a great developer, besides my absolute love for the things a series of characters can manifest, is my diversity of experience. I studied Creative Writing and English at the University of Victoria and graduated with a Bachelor of Fine Arts. I spent my twenties working as a leader and creative in the Canadian media arts community. I worked as the Program Director and Station Manager at CFUV 101.9 FM, Victoria's campus and community radio station, where I created unique and award-winng audio and video content, and managed a small full-time staff team and volunteerbase of over 200 community members. , Editor for Weird Canada, and the President of the National Campus and Community Radio Association. Throughout these roles
        </p>
        <p className="about__text">
          Sometimes people like looking at a big list of languages that someone has experience with. In no particular order other than what I remembered them in, here's mine:
        </p>
        <p className="about__text">
          JavaScript, Node, Express, React, jQuery, HTML, CSS, SASS, PHP, Ruby, Rails, Solidity, Git, GitHub, WordPress, Shopify, Gatsby, Squarespace, Heroku, Netlify, Flywheel
        </p>
        <p className="about__text">
          If you've got an idea for a project, need support on a project, or just grab a coffee, get in touch.
        </p>
      </section>
      <section className="work">
        <h1 className="work__title">Work</h1>
        <h2 className="work__subtitle">Some of the work I've done.</h2>
        <div className="work__grid">
          <article className="project">
            <h1 className="project__title">First Project Title</h1>
            <h2 className="project__sutbtile">First Project description</h2>
            <img className="project__image" src="https://source.unsplash.com/random/45x90" alt="An image of a website project"/>
          </article>
        </div>
      </section>
      <section className="contact">
        <h1 className="contact__title">Contact</h1>
        <h2 className="contact__subtitle">How to get in touch with me</h2>
        <div className="contact__text">My contact info</div>
      </section>
    </main>
  </div>
);
