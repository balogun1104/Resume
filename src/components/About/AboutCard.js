import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, everyone! My name is{" "}
            <span className="purpleAbt">Razak Balogun,</span> and I'm a
            passionate
            <span className="purpleAbt"> Software Engineer </span> hailing from{" "}
            <span className="purpleAbt">Lagos, Nigeria.</span> I find great joy
            in crafting innovative solutions through coding and constantly
            pushing the boundaries of technology.
            <br />
            In addition to my love for programming, I have a range of other
            activities that bring excitement and balance to my life:
          </p>
          <div>
            <span className="about-activity">
              <ImPointRight style={{ fontSize: "40px" }} />
              <p>
                Playing Games: When I'm not immersed in lines of code, you'll
                often find me exploring virtual worlds and engaging in
                exhilarating gaming adventures. It's a fantastic way to unwind
                and immerse myself in captivating narratives.
              </p>
            </span>
            <span className="about-activity">
              <ImPointRight style={{ fontSize: "40px" }} />
              <p>
                Playing Games: When I'm not immersed in lines of code, you'll
                often find me exploring virtual worlds and engaging in
                exhilarating gaming adventures. It's a fantastic way to unwind
                and immerse myself in captivating narratives.
              </p>
            </span>
            <span className="about-activity">
              <ImPointRight style={{ fontSize: "40px" }} />
              <p>
                Playing Games: When I'm not immersed in lines of code, you'll
                often find me exploring virtual worlds and engaging in
                exhilarating gaming adventures. It's a fantastic way to unwind
                and immerse myself in captivating narratives.
              </p>
            </span>
          </div>

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
