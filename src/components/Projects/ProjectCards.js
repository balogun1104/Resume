import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BiCodeAlt } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ color: "black" }}>{props.title}</Card.Title>
        {/* <Card.Text style={{ color: "black", "text-align": "left" }}>
          {props.description}
        </Card.Text> */}
        <div>
          <Button
            variant="primary"
            href={props.link}
            target="_blank"
            className="projectButton"
          >
            <BiCodeAlt /> &nbsp;
            {props.isBlog ? "View Blog" : "Source Code"}
          </Button>
          {/* <br /> */}
          <Button
            variant="primary"
            href={props.linkBtn}
            target="_blank"
            className="projectButton"
          >
            <CgWebsite /> &nbsp;
            {props.isBlog ? "View Blog" : "View Project"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
