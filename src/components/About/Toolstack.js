import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaCloud } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiApache,
  SiWindows,
  SiFigma,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApache />
      </Col>
    </Row>
  );
}

export default Toolstack;
