import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purpleAbt">Razak Balogun </span>
            from <span className="purpleAbt"> Lagos, Nigeria.</span>
            <br />I am a Software Engineer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />
              Playing Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Going to the gym
            </li>
          </ul>

          <p className="purpleAbt">
            "Consistency is the best material for learning !"{" "}
          </p>
          <footer className="blockquote-footer">Razak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
