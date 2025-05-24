import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "./Particle";
import photo from "./../Assets/skill-img.jpg";
import { FaJava } from "react-icons/fa";
import { SiHibernate, SiSpringboot, SiMysql, SiPostman, SiEclipseide, SiSpring } from "react-icons/si";
import { TbBrandVscode, TbApi, TbBrandCss3, TbBrandJavascript } from "react-icons/tb";
import { ImHtmlFive2 } from "react-icons/im";
import { VscJson } from "react-icons/vsc";
import { DiReact } from "react-icons/di";
import Footer from "./Footer";

const Skills = () => {
  return (
    <div>
      <div className="skills-page">
        <Particle />

        <Container fluid className="skill-sets">
          <h1 className="skill-head">
            Professional <strong className="design-color">Skillset</strong>
          </h1>

          <Row className="skill-row">
            <Col xs={12} md={6} className="skill-col">
              <h3><strong className="design-color">Front End</strong></h3>
              <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <Col xs={4} md={2} className="skill-icon">
                  <ImHtmlFive2 />
                  <p>HTML</p>
                </Col>
                <Col xs={4} md={2} className="skill-icon">
                  <TbBrandCss3 />
                  <p>CSS</p>
                </Col>
                <Col xs={4} md={2} className="skill-icon">
                  <TbBrandJavascript />
                  <p>JavaScript</p>
                </Col>
                <Col xs={4} md={2} className="skill-icon">
                  <DiReact />
                  <p>React JS</p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={8} className="skill-col">
              <h3><strong className="design-color">Backend</strong></h3>
              <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <Col xs={2} md={1} className="skill-icon">
                  <FaJava />
                  <p>Java</p>
                </Col>
                <Col xs={2} md={1} className="skill-icon">
                  <SiHibernate />
                  <p>Hibernate</p>
                </Col>
                <Col xs={2} md={1} className="skill-icon">
                  <SiSpring />
                  <p>Spring</p>
                </Col>
                <Col xs={2} md={1} className="skill-icon">
                  <SiSpringboot />
                  <p>SpringBoot</p>
                </Col>
                <Col xs={2} md={1} className="skill-icon">
                  <SiMysql />
                  <p>MySQL</p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={9} className="skill-col">
              <h3><strong className="design-color">Tools</strong></h3>
              <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <Col xs={2} md={1} className="skill-icon">
                  <TbBrandVscode />
                  <p>VS Code</p>
                </Col>
                <Col xs={2} md={1} className="skill-icon">
                  <SiEclipseide />
                  <p>Eclipse IDE</p>
                </Col>
                <Col xs={2} md={1} className="skill-icon">
                  <SiPostman />
                  <p>Postman</p>
                </Col>
                <Col xs={2} md={1} className="skill-icon">
                  <TbApi />
                  <p>API</p>
                </Col>
                <Col xs={2} md={1} className="skill-icon">
                  <VscJson />
                  <p>JSON</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container fluid className="skill-sets">
          <h1 className="skill-head">
            <strong className="design-color">Projects</strong>
          </h1>
          <Row className="project">
            <Col xs={12} md={6} className="project-list">
              <img src={photo} alt="Employee Management System" />
              <h6>Employee Management System</h6>
              <p>
              This project is a comprehensive Employee Management System (EMS) implemented as a Spring Boot application with a RESTful API, MySQL database for data persistence, and a React.js frontend for a user-friendly interface. The system supports basic CRUD operations, allowing the creation, retrieval, updating, and deletion of employee records.
              </p>
              <Button variant="primary" href="https://github.com/varathacse/Employee_Management_App" target="_blank" style={{ marginLeft: "10px" }}>
                GitHub
              </Button>
            </Col>
            <Col xs={12} md={6} className="project-list">
              <img src={photo} alt="Student Result Management System" />
              <h6>Book Store App</h6>
              <p>
              This is a full-stack web application that allows users to manage a collection of books. It is built using React for the frontend, Spring Boot with JPA for the backend, and MySQL for the database. Its includes features like user authentication using JWT tokens and supports many-to-many bidirectional relationships between books and authors.
              </p>
              <Button variant="primary" href="https://github.com/varathacse/Book_Store_App" target="_blank" style={{ marginLeft: "10px" }}>
                GitHub
              </Button>
            </Col>
            <Col xs={12} md={6} className="project-list">
              <img src={photo} alt="Student Result Management System" />
              <h6>To Do List</h6>
              <p>
              This project is a simple and intuitive To-Do List application built with React. It provides a clean and user-friendly interface for managing your tasks, allowing you to add, edit, and mark tasks as completed. The backend is powered by JSON-server to store and manage task data.              </p>
              <Button variant="primary" href="https://github.com/varathacse/To-Do-List" target="_blank" style={{ marginLeft: "10px" }}>
                GitHub
              </Button>
            </Col>
           
            
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Skills;
