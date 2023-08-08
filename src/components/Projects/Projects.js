import React, { useState } from "react";
import { Container } from "react-bootstrap";

import ReactProject from "./ReactProject";
import ReactNativeProject from "./ReactNativeProject";
import Button from "react-bootstrap/Button";
import { AiOutlineMobile } from "react-icons/ai";
import { AiOutlineDesktop } from "react-icons/ai";
import Grahics from "./Grahics";
import Webflow from "./Webflow";

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
            <AiOutlineDesktop /> &nbsp; Web Application
          </Button>

          <Button
            variant="primary"
            onClick={() => handleTabClick(1)}
            className="projectButton"
          >
            <AiOutlineMobile /> &nbsp; Mobile Application
          </Button>

          <Button
            variant="primary"
            onClick={() => handleTabClick(3)}
            className="projectButton"
          >
            <AiOutlineDesktop /> &nbsp; Webflow/WordPress
          </Button>

          <Button
            variant="primary"
            onClick={() => handleTabClick(2)}
            className="projectButton"
          >
            <AiOutlineDesktop /> &nbsp; Ui Designs/Graphics
          </Button>
        </div>

        {/* TabSwitchContent */}
        <div>
          {activeTab === 0 && <ReactProject />}
          {activeTab === 1 && <ReactNativeProject />}
          {activeTab === 2 && <Grahics />}
          {activeTab === 3 && <Webflow />}
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
