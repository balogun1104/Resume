import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import homeLottie from "../../Assets/animation.json";

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: homeLottie,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <motion.div
                initial={{ x: "-200vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
              >
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> BALOGUN</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </motion.div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
                <motion.div
                    initial={{ x: "200vw" }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
                >
                    <Lottie 
                        options={defaultOptions}
                        height={450}
                        width={450}
                    />
                </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
