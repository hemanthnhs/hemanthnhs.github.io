import profile_image from "./../assets/images/profile-image.jpeg";
import { Row, Col } from "react-bootstrap";
import { Github, Linkedin, FileEarmarkPerson } from "react-bootstrap-icons";

const About = () => {
  return (
    <div>
      <Row>
        <Col>
          <img className="profile-img" src={profile_image} width="200" />
        </Col>
      </Row>
      <div className="about-section">
        <Row>
          <Col>
            <div className="text-center">
              <h4>Hemanth Sai Nimmala</h4>
            </div>
          </Col>
        </Row>
      </div>
      <div className="about-section">
        <Row>
          <Col>
            <div>
              <h6 className="text-center">
                <i>Actively looking for Software Engineer positions</i>
              </h6>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <h6 className="text-center">
                <i>Former Software Engineering Co-op at Fidelity</i>
              </h6>
            </div>
          </Col>
        </Row>
      </div>
      <div className="about-section media-btns-section">
        <Row>
          <Col sm={3}></Col>
          <Col sm={2}>
            <FileEarmarkPerson color="#082138" size={35} />
          </Col>
          <Col sm={2}>
            <Linkedin color="#0762C8" size={35} />
          </Col>
          <Col sm={2}>
            <Github color="#320030" size={35} />
          </Col>
          <Col sm={3}></Col>
        </Row>
      </div>
      <div className="about-section">
        <Row>
          <Col>
            <div className="text-justify summary-section">
              I am a passionate Computer Scientist with curiosity to implement
              solutions for complex problems and zeal to continously learn new
              ways in problem solving. I love developing scalable applicatons
              with appropriate design patterns and architectures while
              identifying different solutions and considering the trade-offs. I
              have professional experience developing software applications
              using C, C++, Java, Spring, Python, Ruby On Rails, Javascript,
              NodeJS, React, Angular, AWS and Git. I'm also enthusiastic about
              learning new programming languages, frameworks and principles.
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
