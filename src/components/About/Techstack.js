import React from "react";
import { Col, Row } from "react-bootstrap";
import{ IoLogoHtml5,


} from "react-icons/io";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiCss3,
  SiPhp,
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
    <IoLogoHtml5/>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <SiCss3 />
  </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
    
  
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
   
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
     
    </Row>
  );
}

export default Techstack;
