import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import AkaraHouse from "../../Assets/Projects/akaraHouse.png";
import QuickChapters from "../../Assets/Projects/untitledui.png";
import UntitledUi from "../../Assets/Projects/youtube.png";
import ScreenStudio from "../../Assets/Projects/screenStudio.png";

const Webflow = () => {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={AkaraHouse}
            isBlog={false}
            title="Akara House."
            description="This project involves the development of a cryptocurrency mobile application that provides real-time information about different cryptocurrencies to its users. The app will display information such as price, market cap, volume, and trends of the various cryptocurrencies. The app will also allow users to create a watchlist of their preferred cryptocurrencies."
            link="https://www.akarahouse.com/"
            linkBtn=""
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={QuickChapters}
            isBlog={false}
            title="Quick Chapters"
            description="This project involves the development of a cryptocurrency mobile application that provides real-time information about different cryptocurrencies to its users. The app will display information such as price, market cap, volume, and trends of the various cryptocurrencies. The app will also allow users to create a watchlist of their preferred cryptocurrencies."
            link="https://www.untitledui.com/blog/ui-design-skills"
            linkBtn=""
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={UntitledUi}
            isBlog={false}
            title="Untitled Ui"
            description="This project involves the development of a cryptocurrency mobile application that provides real-time information about different cryptocurrencies to its users. The app will display information such as price, market cap, volume, and trends of the various cryptocurrencies. The app will also allow users to create a watchlist of their preferred cryptocurrencies."
            link="https://sky-template-layout-62708fb897f1e76a6ea.webflow.io/"
            linkBtn=""
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={ScreenStudio}
            isBlog={false}
            title="Quick Chapters"
            description="This project involves the development of a cryptocurrency mobile application that provides real-time information about different cryptocurrencies to its users. The app will display information such as price, market cap, volume, and trends of the various cryptocurrencies. The app will also allow users to create a watchlist of their preferred cryptocurrencies."
            link="https://www.screen.studio/"
            linkBtn=""
          />
        </Col>
      </Row>
    </>
  );
};

export default Webflow;
