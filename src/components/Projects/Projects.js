import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import foodApp from "../../Assets/Projects/Food-app.png";
import chatify from "../../Assets/Projects/chatify.png";
import woozeee from "../../Assets/Projects/woozee.jpg";
import woozeeMovies from "../../Assets/Projects/woozeeMovies.png";
import elearning from "../../Assets/Projects/elearning.png";
import Hulu from "../../Assets/Projects/Hulu.jpg";
import Actech from '../../Assets/Projects/Actech.jpg';
import jarastore from '../../Assets/Projects/jarastore.png';


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={woozeee}
              isBlog={false}
              title="Woozeee Movies"
              description="Woozee Movies is built with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode ."
              link="https://github.com/razak1104/Woozee-Movies"
              linkBtn="https://google.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodApp}
              isBlog={false}
              title="Food-App"
              description="A Food App Built Using React.JS, Styled Component for styling and a RestFul Api for Collection of Data"
              link="https://github.com/razak1104/food-app"
              linkBtn="https://google.com"
            />
          </Col>

  
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elearning}
              isBlog={false}
              title="Learners."
              description="This an app that allows can Anytime Anywhere
              Learn on your
              Suitable Schedule"
              link="https://github.com/https://github.com/razak1104/Online-Educational-Platform/MERN_STACK"
              linkBtn="https://google.com"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              link="https://github.com/razak1104/Hulu"
              linkBtn="https://google.com"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hulu}
              isBlog={false}
              title="HULU 2.0"
              description="Crated with Material Ui with little Bootstrap and fetch API from TMBD API "
              link="https://github.com/razak1104/MERN_STACK"
              linkBtn="https://google.com"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jarastore}
              isBlog={false}
              title="HULU 2.0"
              description="Crated with Material Ui with little Bootstrap and fetch API from TMBD API "
              link="https://github.com/razak1104/MERN_STACK"
              linkBtn="https://google.com"
            />
          </Col>


          x<Col md={4} className="project-card">
            <ProjectCard
              imgPath={Actech}
              isBlog={false}
              title="ACTEch Air-Condtioning Services"
              descriptio=' This app is built with Rect and react-icon'
              linkBtn="https://google.com"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={woozeeMovies}
              isBlog={false}
              title="Woozeee Movies"
              description="Woozee Movies is built with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode ."
              link="https://github.com/razak1104/Woozee-Movies"
              linkBtn="https://google.com"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
