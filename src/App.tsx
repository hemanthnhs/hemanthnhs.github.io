import "./App.css"
import Header from "./components/Header"
import RightContainer from "./components/RightContainer"
import { Row, Col } from "antd"

const App = () => {
    return (
        <div>
            <Header />
            <Row>
                <Col offset={1} span={22}>
                    <RightContainer />
                </Col>
            </Row>
        </div>
    )
}

export default App
