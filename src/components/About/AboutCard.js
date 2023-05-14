import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillStar } from "react-icons/ai";

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
            <AiFillStar style={{ fontSize: "40px" }} />
              <p>
                Playing Games: When I'm not immersed in lines of code, you'll
                often find me exploring virtual worlds and engaging in
                exhilarating gaming adventures. It's a fantastic way to unwind
                and immerse myself in captivating narratives.
              </p>
            </span>
            <span className="about-activity">
              <AiFillStar style={{ fontSize: "40px" }} />
              <p>
                Playing Basketball: As a sports enthusiast, I relish the
                physical challenges and camaraderie that basketball provides.
                Whether it's on the court or cheering on my favorite teams, the
                sport fuels my competitive spirit and keeps me energized.
              </p>
            </span>
            <span className="about-activity">
            <AiFillStar style={{ fontSize: "40px" }} />
              <p>
                Going to the Gym: Maintaining a healthy lifestyle is crucial to
                me, and the gym is my sanctuary for physical and mental
                well-being. I believe in the power of exercise to not only
                strengthen the body but also invigorate the mind, allowing me to
                approach challenges with renewed vigor.
              </p>
            </span>
          </div>

          <p>
            In all aspects of my life, I adhere to the principle that
            <br />
            <span className="purpleAbt">
              "consistency is the best material for learning!"{" "}
            </span>
            <br />
            This motto resonates with me deeply, as I believe that progress is
            best achieved through a steadfast commitment to continuous growth
            and improvement.{" "}
          </p>
          <footer className="blockquote-footer">Razak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
