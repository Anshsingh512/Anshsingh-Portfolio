import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import etate from "../../Assets/Projects/etate.png";
import sapps from "../../Assets/Projects/sapps.png";
import ayal from "../../Assets/Projects/ayal.png";
import health from "../../Assets/Projects/health.png";
import  mado from "../../Assets/Projects/mado.png";
import irir_flowers from "../../Assets/Projects/irir_flowers.png";
import { PayPalButton } from "react-paypal-button-v2";

function Projects() {
   const [isPaid, setIsPaid] = useState(false);
   
  const clientID = "AQAlvK6SKu5XhdAOUFEfKn46uXBS1JFgIamdrZSPdtF8js2ZJ5yrN7Zg0rdiwCQQILnt6p4lkcWowWRt";
  const productID = "EOMFbco2UxEys6Z9J_jOrBUHeV-a5VEVL9yIW_biCOH28EoT0ND7A1183j3XCzpF6cv5kYnSyLjIsH_b";
  const amount = 10;
  const currency = "USD";
  const style = {
    size: "medium",
    color: "blue",
    shape: "pill",
  };
  useEffect(() => {
    const getPaymentStatus = async () => {
      try {
        // Call the backend API to get the payment status
        const response = await fetch("/api/payment-status");
        const data = await response.json();

        // Set the component state with the payment status
        setIsPaid(data.status);
       
      } catch (error) {
        console.error(error);
      }
    };

    getPaymentStatus();
  }, []);

  


  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Most Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
       
        <Col md={4} className="project-card">
  <ProjectCard
    imgPath={health}
    isBlog={false}
    title="Health Connect"
    description="Health-Connect is a comprehensive hospital website with many features such as management system to address data management challenges and streamline healthcare operations. The system integrates nurse, doctor, and admin workflows, providing interconnected access to patient records, appointments, and hospital resources. Additionally, the project includes machine learning models for cancer and heart disease prediction with high accuracy, allowing for early detection and improved patient care. By centralizing data and automating processes, Health-Connect enhances hospital efficiency and supports better patient outcomes."
    ghLink={isPaid ? "https://github.com/Anshsingh512/Health-Connect" : "Unavailable"}
   
  />
  <PayPalButton
            clientID={clientID}
            productID={productID}
            amount={amount}
            currency={currency}
            style={style}
            onSuccess={(payment) => {
              // Set the payment status cookie
              document.cookie = `isPaid=${productID}`;
              console.log(payment);
            }}
            onError={(error) => {
              console.error(error);
            }}
            onCancel={(data) => {
              console.log(data);
            }}
          />
          </Col>

      
      
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={irir_flowers}
              isBlog={false}
              title="IRIS_ica"
              description="Iris flower has three species; setosa, versicolor, and virginica, which differs according to their measurements. Now assume that you have the measurements of the iris flowers according to their species, and here your task is to train a machine learning model that can learn from the measurements of the iris species and classify them. So, this is what IRIS_ica does . "
              ghLink= "https://github.com/Anshsingh512/IRIS_ica-vytoflow" 
            
            />

           </Col>
           
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ayal}
              isBlog={false}
              title="Royal Vyto "
              description="Royal is a multipage website built with the Bootstrap framework that has been specifically intended for resort and hotel websites. It is simply beautiful in its simplicity. It is a highly responsive website that comes with a comprehensive range of practical contemporary features. With the use of this website the one can easily create their respective resort and hotel websites also , can publish their marketing in this . "
              ghLink="https://github.com/Anshsingh512/RoyalVyto"
                   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={etate} 
              isBlog={false}
              title="Vyto Estate"
              description="Both real estate agents and property owners can use this website. This clean and extraordinary website is ideal for selling villas, apartments, land, and houses, among other things. It's an highly responsive website that can able to co-relate the On demand features of Estate respectives . Vyto Estate is completely free to use ! "
              ghLink="https://github.com/Anshsingh512/VytoEstate"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mado}
              isBlog={false}
              title="Vyto Amado"
              description="Using this multi-page website, you can ensure that your customers have a pleasant buying experience. It’s a free website that’s straight forward yet well-designed. Because to its exquisite animation and color combination, Amado has a charming and endearing presence. The initial impression will be formed by a combination of the product picture, price, and tile. On-hover animation is present in all of them, resulting in a seamless user experience. After that, it features a static menu bar that is oriented to the left. You may use it not only as a navigation bar, but also to connect to the current discount offer and new arrivals through two call to action buttons that have been included into the design. With the use of Vyto Amado the user can able to buy and sell their products in the online platform . "
              ghLink="https://github.com/Anshsingh512/VytoAmado"
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sapps}
              isBlog={false}
              title="Vyto Small App"
              description="It's a website used for showcasing and marketing the developed applications by an organizations. I've created this website so , that organizations can able to market their applications in ease and from that users can able to download their applications in very easy steps, It's a kind of appropriate website with full responsive functionality for the publishing and scailing of developed applications without the use of google play store . Vyto Small App is a free website that give organizations a good experience for showcasing their applications in online marketplace .  "
              ghLink="https://github.com/Anshsingh512/VytoSmallApp"
            
            />
          </Col>
          
        </Row>
    </Container>
    </Container>
  );
}

export default Projects;
