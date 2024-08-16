// // import React, { useEffect, useRef } from 'react';
// // import styled from 'styled-components';
// // import { srConfig, email } from '@config';
// // import sr from '@utils/sr';
// // import { usePrefersReducedMotion } from '@hooks';

// // const StyledContactSection = styled.section`
// //   max-width: 600px;
// //   margin: 0 auto 100px;
// //   text-align: center;

// //   @media (max-width: 768px) {
// //     margin: 0 auto 50px;
// //   }

// //   .overline {
// //     display: block;
// //     margin-bottom: 20px;
// //     color: var(--green);
// //     font-family: var(--font-mono);
// //     font-size: var(--fz-md);
// //     font-weight: 400;

// //     &:before {
// //       bottom: 0;
// //       font-size: var(--fz-sm);
// //     }

// //     &:after {
// //       display: none;
// //     }
// //   }

// //   .title {
// //     font-size: clamp(40px, 5vw, 60px);
// //   }

// //   .email-link {
// //     ${({ theme }) => theme.mixins.bigButton};
// //     margin-top: 50px;
// //   }
// // `;

// // const Contact = () => {
// //   const revealContainer = useRef(null);
// //   const prefersReducedMotion = usePrefersReducedMotion();

// //   useEffect(() => {
// //     if (prefersReducedMotion) {
// //       return;
// //     }

// //     sr.reveal(revealContainer.current, srConfig());
// //   }, []);

// //   return (
// //     <StyledContactSection id="contact" ref={revealContainer}>
// //       <h2 className="numbered-heading overline">What’s Next?</h2>

// //       <h2 className="title">Get In Touch</h2>

// //       <p>
// //       Thanks for stopping by. Don't be a stranger, Connect with me online. Feel free to mail me about any relevant job updates.
// //       </p>

// //       <a className="email-link" href={`mailto:${email}`}>
// //         Say Hello
// //       </a>
// //     </StyledContactSection>
// //   );
// // };

// // export default Contact;

// import React, { useEffect, useRef } from 'react';
// import styled from 'styled-components';
// import { srConfig } from '@config';
// import sr from '@utils/sr';
// import { usePrefersReducedMotion } from '@hooks';

// const StyledContactSection = styled.section`
//   max-width: 600px;
//   margin: 0 auto 100px;
//   text-align: center;

//   @media (max-width: 768px) {
//     margin: 0 auto 50px;
//   }

//   .overline {
//     display: block;
//     margin-bottom: 20px;
//     color: var(--green);
//     font-family: var(--font-mono);
//     font-size: var(--fz-md);
//     font-weight: 400;

//     &:before {
//       bottom: 0;
//       font-size: var(--fz-sm);
//     }

//     &:after {
//       display: none;
//     }
//   }

//   .title {
//     font-size: clamp(40px, 5vw, 60px);
//   }

//   .email-link, .linkedin-link {
//     ${({ theme }) => theme.mixins.bigButton};
//     margin-top: 50px;
//     display: inline-block;
//     color: var(--green);
//     background-color: transparent;
//     border: 1px solid var(--green);
//     text-decoration: none;
//     width: 220px; /* Fixed width for both buttons */
//     text-align: center;
//     padding: 1rem 1.75rem;
//     transition: all 0.2s ease;

//     &:hover,
//     &:focus {
//       background-color: var(--green);
//       color: var(--dark-navy);
//       outline: none;
//     }
//   }

//   .linkedin-link {
//     margin-left: 20px; /* Spacing between the buttons */
//   }
// `;

// const Contact = () => {
//   const revealContainer = useRef(null);
//   const prefersReducedMotion = usePrefersReducedMotion();

//   useEffect(() => {
//     if (prefersReducedMotion) {
//       return;
//     }

//     sr.reveal(revealContainer.current, srConfig());
//   }, []);

//   return (
//     <StyledContactSection id="contact" ref={revealContainer}>
//       <h2 className="numbered-heading overline">What’s Next?</h2>

//       <h2 className="title">Get In Touch</h2>

//       <p>
//         Thanks for stopping by. Don't be a stranger, Connect with me online. Feel free to mail me about any relevant job updates.
//       </p>

//       <a
//         className="email-link"
//         href={`mailto:blazyaaman@gmail.com,owaisaaman.sheikh@stonybrook.edu,osheikh@cs.stonybrook.edu`}>
//         Mail Me
//       </a>

//       <a
//         className="linkedin-link"
//         href={`https://www.linkedin.com/in/owais-aaman-sheikh`}
//         target="_blank"
//         rel="noreferrer">
//         LinkedIn outreach
//       </a>
//     </StyledContactSection>
//   );
// };

// export default Contact;

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link,
  .linkedin-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
    display: inline-block;
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    text-decoration: none;
    width: 220px; /* Fixed width for all buttons */
    text-align: center;
    padding: 1rem 1.75rem;
    transition: all 0.2s ease;

    &:hover,
    &:focus {
      background-color: var(--green);
      color: var(--dark-navy);
      outline: none;
    }
  }

  .linkedin-link {
    margin-left: 20px; /* Spacing between the buttons */
  }

  .dropdown {
    margin-top: 20px;
    position: relative;
    display: inline-block;

    &:hover .dropdown-content {
      display: block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: var(--dark-navy);
      min-width: 220px;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 1;

      a {
        color: var(--green);
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;

        &:hover {
          background-color: var(--green);
          color: var(--dark-navy);
        }
      }
    }
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        Thanks for stopping by. Don't be a stranger, Connect with me online. Feel free to mail me about any relevant job updates.
      </p>

      <a
        className="email-link"
        href={`mailto:blazyaaman@gmail.com,owaisaaman.sheikh@stonybrook.edu,osheikh@cs.stonybrook.edu`}>
        Mail Me
      </a>

      <a
        className="linkedin-link"
        href={`https://www.linkedin.com/in/owais-aaman-sheikh`}
        target="_blank"
        rel="noreferrer">
        LinkedIn outreach
      </a>

      <div className="dropdown">
        <a className="email-link" href="#">
          Check out my published adventures
        </a>
        <div className="dropdown-content">
          <a href="https://www.academia.edu/104923451/_The_Advantages_and_Obstacles_of_Adopting_AI_Chatbots_in_Higher_Education_A_Critical_Evaluation_"
            target="_blank" rel="noreferrer">
            AI Chatbots in Higher Education
          </a>
          <a href="https://sciencescholar.us/journal/index.php/ijhs/article/view/6645"
            target="_blank" rel="noreferrer">
            The Advantages of Adopting AI
          </a>
          <a href="https://www.scribd.com/document/620641922/The-Use-of-Interventions-Based-on-Virtual-Reality-in-the-Treatment-of-Anxiety"
            target="_blank" rel="noreferrer">
            Virtual Reality in Treatment of Anxiety
          </a>
        </div>
      </div>
    </StyledContactSection>
  );
};

export default Contact;
