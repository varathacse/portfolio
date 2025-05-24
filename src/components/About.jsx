import { Container, Row, Col } from "react-bootstrap";
import myImg from "../Assets/my-pic.png";
import Tilt from "react-parallax-tilt";
import Particle from "./Particle";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <section>
        <Container fluid className="about-page" id="about">
          <Particle />
          <Container>
            <Row>
              <Col md={8} className="about-header">
                <h1>
                  <span className="design-color">Introduce Myself</span>
                </h1>
                <div className="about-body">
                  <p>Varatha Arjun</p>
                  <p><em>Sivagangai, Tamil Nadu, India</em></p>
                  <p>
                    I hold a Master of Engineering (M.E.) in Computer Science and Engineering from Knowledge Institute of Technology, Salem,
                    affiliated with Anna University, Chennai, graduating with a CGPA of 8.65.
                  </p>
                  <p>
                    I also earned a Bachelor of Engineering (B.E.) in Computer Science and Engineering from MPNMJ Engineering College, Erode,
                    affiliated with Anna University, Chennai, with a CGPA of 8.11.
                  </p>
                  <p>
                    I completed a Java Full Stack Development course at JSpiders, Bangalore, where I gained hands-on experience in developing full-stack applications.
                  </p>
                  <p>
                    My technical stack includes Core Java, JavaScript, Hibernate, JPA, Spring Boot, React.js, MySQL, HTML, and CSS. I’ve built applications like a Bookstore Management System and an Employee Management System using these technologies.
                  </p>
                  <p>
                    As a passionate software engineer, I strive to contribute to innovative projects and continuously improve my skills in software development.
                  </p>
                </div>
              </Col>
              <Col md={4} className="about-myimg">
                <Tilt>
                  <img src={myImg} className="img-fluid" alt="Varatha Arjun" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="about-sm">
                <h1>Find Me On</h1>
                <p>Feel free to <span className="design-color">connect</span> with me</p>
                <ul className="about-sm-link">
                  {[
                    { href: "https://github.com/varathacse", icon: <AiFillGithub /> },
                    { href: "https://www.linkedin.com/in/varathacse", icon: <FaLinkedinIn /> },
                    { href: "https://www.instagram.com/varathaarjun", icon: <AiFillInstagram /> }
                  ].map(({ href, icon }) => (
                    <li className="social-icons" key={href}>
                      <a href={href} target="_blank" rel="noreferrer" className="icon-colour about-sm-icons">
                        {icon}
                      </a>
                    </li>
                  ))}
                </ul>

              </Col>
            </Row>
          </Container>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default About;
