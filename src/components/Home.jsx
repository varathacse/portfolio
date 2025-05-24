import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pic from "../Assets/home-img.png";
import Typewriter from "typewriter-effect";
import Footer from "./Footer";
import Particle from '../components/Particle'

const Home = () => {
  return (
    <div>
      <section>
        <Container fluid className="home-page" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 className="heading">
                  Hello{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
                <h1 className="heading-name">
                  I'M <strong className="main-name">Varatha Arjun</strong>
                </h1>
                <div style={{ padding: 30, textAlign: "left" }}>
                  <Typewriter
                    options={{
                      strings: ["Junior Software Engineer"],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 60,
                    }}
                  />
                </div>
              </Col>
              <Col md={4} className="img-col">
                <img
                  src={pic}
                  alt="Varatha Arjun"
                  className="img-home"
                  style={{ maxHeight: "400px"  }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
