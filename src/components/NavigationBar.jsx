import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo1.png";
import { AiOutlineHome, AiOutlineUser, AiOutlineSlack } from "react-icons/ai";
import Home from "./Home";
import Skills from "./Skills";
import About from "./About";


const NavigationBar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [page, setPage] = useState("home");




  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <>
      <Navbar expanded={expand} fixed="top" expand="md"
        className={navColour ? "sticky" : "navbar"}   >

        <Container>
          <Navbar.Brand href="" className="d-flex">
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link onClick={() => { updateExpanded(false); setPage("home") }}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link

                  onClick={() => { updateExpanded(false); setPage("skills") }}

                >
                  <AiOutlineSlack
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Skills
                </Nav.Link>
              </Nav.Item>


              <Nav.Item>
                <Nav.Link
                  onClick={() => { updateExpanded(false); setPage("about") }}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>{(page === "home") ? <Home /> : (page === "skills") ? <Skills /> : (page === "about") ? <About /> : <Home />}


    </>
  );
}

export default NavigationBar;
