import "./WorkExperience.css"
import { useEffect, useState } from "react"
import { List, Avatar } from "antd"
import axios from "axios"

const WorkExperience = () => {
    const [work, setWork] = useState([])
    useEffect(() => {
        axios
            .get("./work.json")
            .then((resp) => {
                console.log("Success", resp["data"])
                setWork(resp["data"])
            })
            .catch((resp) => {
                console.log("Error occcured while fetching work details", resp)
            })
    }, [])
    return (
        <div>
            <List
                itemLayout="horizontal"
                dataSource={work}
                renderItem={(item: any) => (
                    <List.Item
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={
                                <Avatar
                                    src={"/assets/images/" + item.logo}
                                    size={100}
                                    shape="square"
                                />
                            }
                            title={
                                <>
                                    <div className="work-position">
                                        {item.position}
                                    </div>
                                    <div>
                                        <span className="work-company">
                                            {item.companyName}
                                        </span>
                                        <span className="work-location">
                                            {item.location}
                                        </span>
                                    </div>
                                </>
                            }
                            description={
                                <List
                                    size="small"
                                    dataSource={item.responsibilities}
                                    renderItem={(item: any) => (
                                        <List.Item>{item}</List.Item>
                                    )}
                                />
                            }
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}

export default WorkExperience
