import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import UPS from '../../Assets/Projects/ups.png'
import GOfresh from '../../Assets/Projects/fastFood.png'

const ReactNativeProject = () => {
  return (
   <>
   <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {/* UpMobile */}
      <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UPS}
              isBlog={false}
              title="UPS."
              description="Ups is a Delivery Mobile Application that supports both ios and android its built with React Native"
              link="https://github.com/razak1104/Ups"
              linkBtn=""
            />
          </Col>

          {/* GOfresh */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GOfresh}
              isBlog={false}
              title="GoFresh."
              description="GoFresh is a Food Mobile Application built with React Native"
              link="https://github.com/razak1104/Fast_Food"
              linkBtn=""
            />
          </Col>
          </Row>
   </>
  )
}

export default ReactNativeProject