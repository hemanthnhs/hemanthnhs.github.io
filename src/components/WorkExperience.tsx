import "./WorkExperience.css"
import { useEffect, useState } from "react"
import { List, Avatar, Carousel, Col, Card } from "antd"
import axios from "axios"

const { Meta } = Card

const renderLinks = (items: any) => {
    let links: any = []
    items.map((item: any) => {
        links.push(<div>{item.link}</div>)
    })
    return <div>{links}</div>
}

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
                            item.links.length != 0 && (
                                <Col span={4} offset={1}>
                                    <Card
                                        className="link-card"
                                        title={item.linksTitle}
                                        bordered={false}
                                    >
                                        {
                                            <List
                                                itemLayout="horizontal"
                                                dataSource={item.links}
                                                renderItem={(linkItem: any) => (
                                                    <List.Item className="links-list-item">
                                                        <List.Item.Meta
                                                            className="links-list-item-meta"
                                                            avatar={
                                                                <Avatar
                                                                    src={
                                                                        linkItem.logo
                                                                    }
                                                                />
                                                            }
                                                            title={
                                                                <a
                                                                    href={
                                                                        linkItem.link
                                                                    }
                                                                    className="links-list-item-title"
                                                                >
                                                                    {linkItem.title}
                                                                </a>
                                                            }
                                                        />
                                                    </List.Item>
                                                )}
                                            />
                                        }
                                    </Card>
                                </Col>
                            )
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
                                    <div>
                                        <span className="work-position">
                                            {item.position}
                                        </span>
                                        <span className="work-dates">
                                            {item.startDate + " - "}
                                            {item.endDate ? item.endDate : "Present"}
                                        </span>
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
                                    renderItem={(respItem: any) => (
                                        <List.Item className="work-responsibility">
                                            {respItem}
                                        </List.Item>
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
