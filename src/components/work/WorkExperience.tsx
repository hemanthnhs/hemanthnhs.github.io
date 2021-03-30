import "./WorkExperience.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { List, Avatar, Col, Card } from "antd"
import { EnvironmentOutlined, FireTwoTone, LinkOutlined } from "@ant-design/icons"

const WorkExperience = ({ isMobile }: { isMobile: boolean }) => {
    const [work, setWork] = useState([])
    useEffect(() => {
        axios
            .get("./data/work.json")
            .then((resp) => {
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
                            !isMobile &&
                            item.links.length != 0 && (
                                <Col span={4} offset={1}>
                                    <Card
                                        className="link-card"
                                        title={
                                            <>
                                                <LinkOutlined />
                                                {item.linksTitle}
                                            </>
                                        }
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
                                    {isMobile ? (
                                        <>
                                            <h1 className="work-position">
                                                {item.position}
                                            </h1>
                                            <h1 className="work-company">
                                                {item.companyName}
                                            </h1>
                                            <div
                                                className={
                                                    "work-location" +
                                                    (isMobile
                                                        ? " no-margin-left"
                                                        : "")
                                                }
                                            >
                                                <span className="work-loc-icon">
                                                    <EnvironmentOutlined />
                                                </span>
                                                {item.location}
                                            </div>
                                            <div
                                                className={
                                                    "work-dates" +
                                                    (isMobile
                                                        ? " no-margin-left"
                                                        : "")
                                                }
                                            >
                                                {item.startDate + " - "}
                                                {item.endDate
                                                    ? item.endDate
                                                    : "Present"}
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div>
                                                <h3 className="work-position inline-heading">
                                                    {item.position}
                                                </h3>
                                                <span className="work-dates">
                                                    {item.startDate + " - "}
                                                    {item.endDate
                                                        ? item.endDate
                                                        : "Present"}
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="work-company inline-heading">
                                                    {item.companyName}
                                                </h3>
                                                <span className="work-location">
                                                    <span className="work-loc-icon">
                                                        <EnvironmentOutlined />
                                                    </span>
                                                    {item.location}
                                                </span>
                                            </div>
                                        </>
                                    )}
                                </>
                            }
                            description={
                                !isMobile && (
                                    <List
                                        className="work-responsibility-list"
                                        size="small"
                                        dataSource={item.responsibilities}
                                        renderItem={(respItem: any) => (
                                            <List.Item className="work-responsibility">
                                                <p>
                                                    <span className="work-responsibility-icon">
                                                        <FireTwoTone />
                                                    </span>
                                                    {respItem.text}
                                                </p>
                                            </List.Item>
                                        )}
                                    />
                                )
                            }
                        />
                        {isMobile && (
                            <List
                                className="work-responsibility-list"
                                size="small"
                                dataSource={item.responsibilities}
                                renderItem={(respItem: any) => (
                                    <List.Item className="work-responsibility">
                                        <p>
                                            <span className="work-responsibility-icon">
                                                <FireTwoTone />
                                            </span>
                                            {respItem.mobileText
                                                ? respItem.mobileText
                                                : respItem.text}
                                        </p>
                                    </List.Item>
                                )}
                            />
                        )}
                    </List.Item>
                )}
            />
        </div>
    )
}

export default WorkExperience
