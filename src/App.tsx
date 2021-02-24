import "./App.css"
import Header from "./components/Header"
import ContentContainer from "./components/ContentContainer"
import { Row, Col } from "antd"
import { useState } from "react"

const App = () => {
    const [currentMenuInView, setMenuInView] = useState("about")
    return (
        <div>
            <Header currentMenuInView={currentMenuInView} />
            <Row>
                <Col offset={1} span={22}>
                    <ContentContainer setMenuInView={setMenuInView} />
                </Col>
            </Row>
        </div>
    )
}

export default App
