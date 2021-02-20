import axios from "axios"
import { useEffect, useState } from "react"
import { List, Card } from "antd"
import { FireTwoTone } from "@ant-design/icons"
import "./Projects.css"

const { Meta } = Card

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        axios
            .get("./data/projects.json")
            .then((resp) => {
                setProjects(resp["data"])
            })
            .catch((err) => {
                console.log("Error occured while getting projects data", err)
            })
    }, [])
    return (
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 3,
                xl: 4,
                xxl: 4,
            }}
            dataSource={projects}
            renderItem={(project: any) => (
                <List.Item>
                    <Card
                        cover={
                            <img
                                alt="example"
                                className="project-img"
                                src={project.headerImg}
                            />
                        }
                    >
                        <Meta
                            title={project.title}
                            description={
                                <List
                                    className="project-accomplishment-list"
                                    size="small"
                                    dataSource={project.accomplishments}
                                    renderItem={(respItem: any) => (
                                        <List.Item className="project-accomplishment">
                                            <span>
                                                <FireTwoTone />
                                            </span>
                                            {respItem}
                                        </List.Item>
                                    )}
                                />
                            }
                        />
                    </Card>
                </List.Item>
            )}
        />
    )
}

export default Projects
