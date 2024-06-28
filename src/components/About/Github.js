import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Contributed</strong>
      </h1>
      <GitHubCalendar
        username="Anshsingh512"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
       <a
        href={"https://github.com/Anshsingh512"} 
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginTop: "20px" }}
      >
        <strong className="purple">{"Anshsingh512"}</strong>
      </a>
    </Row>
  );
}

export default Github;
