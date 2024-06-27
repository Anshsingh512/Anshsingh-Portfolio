import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Ansh Singh  </span>
            from <span className="purple"> Uttar Pradesh India.</span>
            <br />
            I Am Thrilled For Being Enrolled In Software Engineering .
            <br />
            I have pursuing B.Tech ( Computer Science & Engineering ) from A.P.J Abdul Kalam Technical University 
            <br />
            <br />
            Apart from Coding & Brainstorming, some other activities that I love to do !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Enriching My Skills Set .
            </li>
            <li className="about-activity">
              <ImPointRight /> Boosting My Innovations And Ideology .
            </li>
            <li className="about-activity">
              <ImPointRight /> Collaborating With Tech Enthusiasts .
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ansh Singh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
