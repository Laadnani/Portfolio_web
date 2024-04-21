import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Laadnani Mohamed </span>
            from <span className="purple"> Casablanca, Morocco.</span>
            <br />
            I am currently self-employed as an indi app developer.
            <br />
            I have completed a bachelor degree in Cellular and molecular Biology
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess.
            </li>
            <li className="about-activity">
              <ImPointRight /> reviewing tech innivations and  their new implementations.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Laadnani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
