import { Row, Col } from "antd"

const profile_image =  require("./../assets/images/profile-image.jpeg")


const About = () => {
    return (
        <div>
            <Row>
                <Col>
                    <img
                        className="profile-img"
                        src={profile_image}
                        width="200"
                    />
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
                                <i>
                                    Actively looking for Software Engineer
                                    positions
                                </i>
                            </h6>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <h6 className="text-center">
                                <i>
                                    Former Software Engineering Co-op at
                                    Fidelity
                                </i>
                            </h6>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="about-section media-btns-section">
                {/* <Row>
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
        </Row> */}
            </div>
            <div className="about-section">
                <Row>
                    <Col>
                        <div className="text-justify summary-section">
                            Todo
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default About
