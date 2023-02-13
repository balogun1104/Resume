import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import foodApp from "../../Assets/Projects/Food-app.png";
import chatify from "../../Assets/Projects/chatify.png";

import woozeeMovies from "../../Assets/Projects/woozeeMovies.png";

import Hulu from "../../Assets/Projects/Hulu.jpg";
import Actech from "../../Assets/Projects/Actech.jpg";
import jarastore from "../../Assets/Projects/jarastore.png";
import ApiManagement from "../../Assets/Projects/ApiManagement.png";
import UPS from "../../Assets/Projects/ups.png";
import GOfresh from "../../Assets/Projects/fastFood.png";

import ReactProject from "./ReactProject";
import ReactNativeProject from "./ReactNativeProject";
import Button from "react-bootstrap/Button";
import {AiOutlineMobile} from 'react-icons/ai'
import {AiOutlineDesktop} from 'react-icons/ai'

function Projects() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: " #080808" }}>
          Here are a few projects I've worked on recently.
        </p>
        {/* Tab Options */}
        <div>
          <Button
            variant="primary"
            onClick={() => handleTabClick(0)}
            className="projectButton"
          >
           <AiOutlineDesktop /> &nbsp;
            React Project
          </Button>

          <Button
            variant="primary"
            onClick={() => handleTabClick(1)}
            className="projectButton"
          >
             <AiOutlineMobile /> &nbsp;
            React Native Project
          </Button>
        </div>

        {/* TabSwitchContent */}
        <div>
          {activeTab === 0 && <ReactProject />}
          {activeTab === 1 && <ReactNativeProject />}
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
