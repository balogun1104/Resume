import React from "react";
import ImageCards from "./ImageCards";
import { Row, Col } from "react-bootstrap";
import ImageOne from "../.././Assets/Projects/graphicsWork/image1.jpeg";
import ImageTwo from "../.././Assets/Projects/graphicsWork/image2.jpeg";
import ImageThree from "../.././Assets/Projects/graphicsWork/image3.jpeg";
import ImageFour from "../.././Assets/Projects/graphicsWork/image4.jpeg";
import ImageFive from "../.././Assets/Projects/graphicsWork/image5.jpeg";
import ImageSix from "../.././Assets/Projects/graphicsWork/image6.jpeg";
import ImageSeven from "../.././Assets/Projects/graphicsWork/image7.jpeg";
import ImageEight from "../.././Assets/Projects/graphicsWork/image8.jpeg";
import ImageNine from "../.././Assets/Projects/graphicsWork/image9.jpeg";
import ImageTen from "../.././Assets/Projects/graphicsWork/image10.jpeg";
import ImageEleven from "../.././Assets/Projects/graphicsWork/image11.jpeg";
import ImageTwelve from "../.././Assets/Projects/graphicsWork/image12.jpeg";
const Grahics = () => {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ImageCards imgPath={ImageOne} />
        </Col>

        <Col md={4} className="project-card">
          <ImageCards imgPath={ImageTwo} />
        </Col>

        <Col md={4} className="project-card">
          <ImageCards imgPath={ImageThree} />
        </Col>

        <Col md={4} className="project-card">
          <ImageCards imgPath={ImageFour} />
        </Col>

        <Col md={4} className="project-card">
          <ImageCards imgPath={ImageFive} />
        </Col>

        <Col md={4} className="project-card">
          <ImageCards imgPath={ImageSix} />
        </Col>

        <Col md={4} className="project-card">
          <ImageCards imgPath={ImageSeven} />
        </Col>

        <Col md={4} className="project-card">
          <ImageCards imgPath={ImageEight} />
        </Col>

        <Col md={4} className="project-card">
          <ImageCards imgPath={ImageNine} />
        </Col>

        <Col md={4} className="project-card">
          <ImageCards imgPath={ImageTen} />
        </Col>

        <Col md={4} className="project-card">
          <ImageCards imgPath={ImageEleven} />
        </Col>

        <Col md={4} className="project-card">
          <ImageCards imgPath={ImageTwelve} />
        </Col>
      </Row>
    </>
  );
};

export default Grahics;
