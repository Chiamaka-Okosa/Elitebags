import React from "react";
import ChiamakaMailIcon from '../assets/mail-icon.png'

const About = () => {
  return (
    <>
      <h1>About</h1>
      <img
        src={ChiamakaMailIcon}
        alt="About Page"
        width="150px"
        height="150px"
      />
      <p>
        <b>Name</b>: Chiamaka Okosa
      </p>
      <p>
        <em>
          I'm the CEO of elite bags and a style coach. My mission is to help you
          create a wardrobe that reflects your personality, and match your
          style.
        </em>
      </p>
      <p>
        <mark>Let your bag speak for you</mark>
      </p>
    </>
  );
};

export default About;
