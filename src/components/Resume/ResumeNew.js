import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Balogun_Razak_CV_.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Resume1 from "../../Assets/Projects/Resume1.png";
import Resume2 from "../../Assets/Projects/Resume2.png";
// import cv from "../Resume/Balogun_Razak_CV_.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const resumeLink =
//   // "https://github.com/razak1104/Resume/blob/ca4b4e6d8eefd4c96af5c2c23e4baa882e661564/src/Assets/Balogun_Razak_CV_.pdf";
//   // "https://github.com/razak1104/Resume/raw/ca4b4e6d8eefd4c96af5c2c23e4baa882e661564/src/Assets/Balogun_Razak_CV_.pdf";
//   // "https://github.com/razak1104/Resume/blob/main/src/Assets/Balogun_Razak_CV_.pdf";
//   "https://github.com/razak1104/Resume/blob/32c359b3cfc65642dd8c25e8553171541e804752/src/Assets/Balogun_Razak_CV_.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <img src={Resume1} className="d-flex justify-content-center" />
        </Row>

        <Row className="resume">
          <img src={Resume2} className="d-flex justify-content-center" />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;