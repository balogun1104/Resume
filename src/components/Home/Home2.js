import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/razak_dev.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

function Home2() {
  const [isInView, setIsInView] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0, // Intersection threshold
    triggerOnce: true, // Only trigger once
  });

  useEffect(() => {
    setIsInView(inView);
  }, [inView]);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row style={{justifyContent: 'space-evenly'}}>
          <Col md={6} className="home-about-description">
            <h1 className="intro_header">
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <div ref={ref}>
              {isInView && (
                <motion.div
                  animate={{ x: 0 }}
                  initial={{ x: "-200vw" }}
                  transition={{ type: "spring", stiffness: 20, delay: 0.2 }}
                >
                  {/* Your animated component */}
                  <div className="home_two_about_me_wrapper">
                    <p className="home_two_about_me">
                      I am a highly motivated and results-driven React/React
                      Native Software Developer with extensive experience in
                      Frontend Engineering and UI/UX Design. Skilled in building
                      responsive, user-friendly interfaces using React and React
                      Native, as well as integrating with back-end APIs and
                      services. Constantly learning and staying up-to-date with
                      the latest technologies in the React ecosystem. My skills
                      include strong knowledge and experience in React/React
                      Native, proficiency in JavaScript, HTML, and CSS,
                      understanding of UI/UX design principles, familiarity with
                      Git and version control, ability in testing and debugging,
                      problem-solving and analytical thinking, effective
                      communication and collaboration, continuous learning
                      mindset, and project management experience in agile
                      development environments.
                    </p>
                    {/* <br />
                    <motion.p
                     animate={{ x: 0 }}
                     initial={{ x: "400vw" }}
                     transition={{ type: "spring", stiffness: 20, delay: 0.8 }}
                    className="home_two_about_me">
                      As a MERN Stack developer, I specialize in creating web
                      applications that are dynamic, interactive, and
                      responsive. I have experience working with MongoDB to
                      manage databases, Express.js to create server-side
                      applications, React.js to develop user interfaces, and
                      Node.js to run server-side scripts.
                    </motion.p>
                    <br />
                    <motion.p 
                    animate={{ x: 0 }}
                    initial={{ x: "-200vw" }}
                    transition={{ type: "spring", stiffness: 20, delay: 1.4 }}
                    className="home_two_about_me">
                      I have a passion for coding and enjoy tackling complex
                      problems. I am always looking for new and innovative ways
                      to improve my skills and stay up-to-date with the latest
                      technologies. In addition to my technical abilities, I
                      have excellent communication and collaboration skills,
                      which allow me to work effectively in a team environment.
                    </motion.p>
                    <br />
                    <motion.p 
                    animate={{ x: 0 }}
                    initial={{ x: "400vw" }}
                    transition={{ type: "spring", stiffness: 20, delay: 2.0 }}
                    className="home_two_about_me">
                      Overall, I am confident in my ability to develop
                      high-quality web applications using the MERN Stack. I am
                      excited to share my knowledge and expertise with others,
                      and I look forward to collaborating with like-minded
                      professionals in the industry. 
                    </motion.p> */}
                  </div>
                </motion.div>
              )}
            </div>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ borderRadius: "50px" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/razak1104"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/razak2free"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/balogun-razak-638b67178/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/razakisthename/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
