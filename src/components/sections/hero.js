import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h2 {
    font-size: clamp(3rem, 8vw, 5rem); /* Increase the font size */
    margin-bottom: 10px; /* Add a little space between the name and the tagline */
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 1.1; /* Adjust the line height for better spacing */
    font-size: clamp(2rem, 6vw, 3.5rem); /* Increase the font size */
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
    color: var(--white);
    background: linear-gradient(45deg, #ff6ec4, #7873f5, #4ade80, #facc15);
    background-size: 300% 300%;
    border: 2px solid transparent;
    border-radius: 4px;
    transition: all 0.4s ease;
    animation: gradientBackground 5s ease infinite;
    opacity: 0; /* Initially hide the button */
    transition: opacity 0.4s ease; /* Smooth fade-in effect */

    &:hover,
    &:focus {
      color: var(--black); /* Text color change on hover */
      background-position: 100% 0;
      border-color: #fff; /* Glowing border effect */
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
    }

    @keyframes gradientBackground {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }

  .email-link.show {
    opacity: 1; /* Show the button */
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false); // State for button visibility
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    const buttonTimeout = setTimeout(() => setIsButtonVisible(true), navDelay); // Adjust the button appearance timing to be the same as other elements
    return () => {
      clearTimeout(timeout);
      clearTimeout(buttonTimeout);
    };
  }, []);

  const one = <h1>Hello Stranger 👋! I am</h1>;
  const two = <h2 className="big-heading">Owais Aaman Sheikh.</h2>;
  const three = <h3 className="big-heading">I love building things with code!</h3>;
  const four = (
    <>
      <p>
        I'm currently pursuing my Master's in Computer Science at{' '}
        <a href="https://www.stonybrook.edu/" target="_blank" rel="noreferrer">
          Stony Brook University
        </a>
        , and I have nearly 2 years of experience as a Full Stack Developer proficient in the MERN stack. I'm passionate about full stack development, game projects, and crafting intuitive operating systems with a strong focus on UI/UX design. Always eager to learn, I'm excited to apply my skills to create efficient and innovative solutions that enhance user experiences.
      </p>
    </>
  );
  const five = (
    <p>
      I'm now seeking a full-time role where I can contribute my skills in coding.<br/><br/>
      Let's code the future together!
    </p>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
      <a
        className={`email-link ${isButtonVisible ? 'show' : ''}`} // Conditionally add the 'show' class
        href="https://mail.google.com/mail/?view=cm&fs=1&to=blazyaaman@gmail.com,osheikh@cs.stonybrook.edu,owaisaaman.sheikh@stonybrook.edu&su=Let's%20Work%20Together&body=Hi%20Owais,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20I%20am%20interested%20in%20discussing%20potential%20opportunities%20for%20a%20role%20in%20the%20%5Bcompany%20name%5D.%0D%0A%0D%0AI'm%20impressed%20by%20your%20skills%20and%20would%20love%20to%20know%20more%20about%20you.%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you!%0D%0A%0D%0ABest%20regards,%0D%0A%5BYour%20Name%5D"
        target="_blank"
        rel="noreferrer">
        Hire Me!
      </a>
    </StyledHeroSection>
  );
};

export default Hero;
