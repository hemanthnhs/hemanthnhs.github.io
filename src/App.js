import "./App.css";
import React from "react";
import Header from "./Header";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import { Row, Col } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Row>
          <Col md={4}>
            <LeftContainer />
          </Col>
          <Col md={8}>
            <RightContainer />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
