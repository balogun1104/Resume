import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillStar } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            A talented <span className="purpleAbt"> Software Engineer </span>{" "}
            hailing from the vibrant city of{" "}
            <span className="purpleAbt">Lagos, Nigeria.</span>
            With a passion for coding, Razak has honed his skills and expertise
            in the field, making him a valuable asset in the world of
            technology.
            <br />
            Beyond his coding prowess, Razak indulges in a variety of activities
            that bring him joy and balance in life.
          </p>
          <div>
            <span className="about-activity">
              <AiFillStar style={{ fontSize: "40px" }} />
              <p>
                <span className="purpleAbt">Playing Games:</span> When I'm not
                immersed in lines of code, you'll often find me exploring
                virtual worlds and engaging in exhilarating gaming adventures.
                It's a fantastic way to unwind and immerse myself in captivating
                narratives.
              </p>
            </span>
            <span className="about-activity">
              <AiFillStar style={{ fontSize: "40px" }} />
              <p>
                <span className="purpleAbt">Playing Basketball:</span> As a
                sports enthusiast, I relish the physical challenges and
                camaraderie that basketball provides. Whether it's on the court
                or cheering on my favorite teams, the sport fuels my competitive
                spirit and keeps me energized.
              </p>
            </span>
            <span className="about-activity">
              <AiFillStar style={{ fontSize: "40px" }} />
              <p>
                <span className="purpleAbt">Going To The Gym:</span> Maintaining
                a healthy lifestyle is crucial to me, and the gym is my
                sanctuary for physical and mental well-being. I believe in the
                power of exercise to not only strengthen the body but also
                invigorate the mind, allowing me to approach challenges with
                renewed vigor.
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
