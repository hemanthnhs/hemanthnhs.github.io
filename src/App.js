import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import RightContainer from "./components/RightContainer";
import { Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <Header />
      <Row>
        <Col md={4}>
          <About />
        </Col>
        <Col md={8}>
          <RightContainer />
        </Col>
      </Row>
    </div>
  );
};

export default App;
