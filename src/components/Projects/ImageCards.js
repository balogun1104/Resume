import React, { useState } from "react";
import Card from "react-bootstrap/Card";
;

function ImageCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ color: "black" }}>{props.title}</Card.Title> 
      </Card.Body>
    </Card>
  );
}
export default ImageCards;
