import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Balogun_Razak_2.0.pdf";
import { AiOutlineDownload } from "react-icons/ai";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Document, Page, pdfjs } from 'react-pdf';



pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  //   const onDocumentLoadSuccess = ({ numPages }) => {
  //   setNumPages(numPages);
  //  }
   
  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  }
  return (
    <div>
      <Container fluid className="resume-section">
       
        <Row style={{ justifyContent: "center", position: "relative", padding: '20px'}}>
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
         <div>
      <Document file={pdf}  onLoadError={console.error}  className="resume-image" >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <button onClick={() => handlePageChange(pageNumber - 1)}>Previous</button>
        <span>{pageNumber}</span>
        <button onClick={() => handlePageChange(pageNumber + 1)}>Next</button>
      </div>
    </div>

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