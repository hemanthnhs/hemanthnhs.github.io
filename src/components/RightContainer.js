import ProjectContainer from "./Projects"
import WorkExperience from "./WorkExperience"
import { Tabs } from "antd"

const { TabPane } = Tabs

const RightContainer = () => {
    return (
        <div>
            <Tabs defaultActiveKey="work">
                <TabPane tab="Work Experience" key="work">
                    <WorkExperience />
                </TabPane>
                <TabPane tab="Projects" key="project">
                    <ProjectContainer />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default RightContainer
