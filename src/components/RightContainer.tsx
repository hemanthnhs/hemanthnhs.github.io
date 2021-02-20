import ProjectContainer from "./projects/Projects"
import WorkExperience from "./work/WorkExperience"
import { Tabs } from "antd"

const { TabPane } = Tabs

const RightContainer = () => {
    return (
        <div>
            <Tabs defaultActiveKey="project">
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
