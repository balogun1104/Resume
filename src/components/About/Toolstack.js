import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiStackoverflow,
  SiVisualstudiocode,
  SiPostman,
  SiGoogle,
  SiNetlify,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStackoverflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
    </Row>
  );
}

export default Toolstack;
