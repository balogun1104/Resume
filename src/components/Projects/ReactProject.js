import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Woozee from "../../Assets/Projects/woozee_.png";
import MedChat from "../../Assets/Projects/medChat.png";
import elearning from "../../Assets/Projects/elearning.png";
import Crid from "../../Assets/Projects/crid.png";
import AkaraHouse from "../../Assets/Projects/akaraHouse.png";

const ReactProject = () => {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {/* Woozee */}
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={Woozee}
            isBlog={false}
            title="Woozeee"
            description="Woozee is a platform where you can have FUN, MAKE MONEY and GIVE BACK TO SOCIETY ."
            link="https://github.com/razak1104/Woozee-Movies"
            linkBtn="https://www.woozeee.com/"
          />
        </Col>
        {/* Crid */}
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={Crid}
            isBlog={false}
            title="Crid"
            description="Crid is for rewards for paying credit card bills.."
            link="https://github.com/razak1104/cred"
            linkBtn="https://crid.netlify.app/"
          />
        </Col>
        {/* Akara House */}
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={AkaraHouse}
            isBlog={false}
            title="Akara House"
            description="Best African-Burger in NYC"
            link=""
            linkBtn="https://www.akarahouse.com/"
          />
        </Col>

        {/* MedChat */}
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={MedChat}
            isBlog={false}
            title="MedChat"
            description="MedChat is a Medical FullStack Chat Application that enable a paitient chat with a Doctor  "
            link="https://github.com/razak1104/med-chatapp"
            linkBtn="https://med-chatapp.netlify.app/"
          />
        </Col>
        {/* EL-Note */}
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={elearning}
            isBlog={false}
            title="Learners."
            description="This an app that allows can Anytime Anywhere
              Learn on your
              Suitable Schedule"
            link="https://github.com/razak1104/Online-Educational-Platform/MERN_STACK"
            linkBtn=""
          />
        </Col>
      </Row>
    </>
  );
};

export default ReactProject;
