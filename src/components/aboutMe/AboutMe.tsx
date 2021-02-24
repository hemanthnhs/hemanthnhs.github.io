import "./AboutMe.css"
import { List, Avatar, Col, Row, Image } from "antd"
import { Tag } from "antd"
import { useEffect, useState, lazy } from "react"
import axios from "axios"
import { Icons } from "./IconComponents"
import TerminalView from "./TerminalView"
const AboutMe = () => {
    const [skills, setSkills] = useState<any>({
        programming: [],
        web: [],
        tools: [],
        databases: [],
    })
    useEffect(() => {
        axios
            .get("./data/skills.json")
            .then((resp) => {
                setSkills(resp["data"])
            })
            .catch((resp) => {
                console.log("Error occcured while fetching work details", resp)
            })
    }, [])

    const renderSkills = (skill: string) => {
        console.log(".")
        let skill_list = skills[skill]
        let res: any = []
        skill_list.forEach((skill_item: ["string", "string"]) => {
            if (skill_item[1]) {
                res.push(
                    <Tag
                        className="skill-tag"
                        color="#55acee"
                        icon={Icons[skill_item[1]]}
                    >
                        {skill_item[0]}
                    </Tag>
                )
            } else {
                res.push(
                    <Tag className="skill-tag" color="#55acee">
                        {skill_item[0]}
                    </Tag>
                )
            }
        })
        return <span>{res}</span>
    }
    return (
        <div>
            <div className="intro">
                <div className="text-center">
                    <Avatar
                        size={120}
                        icon={<Image src={"./assets/images/profile-image.jpeg"} />}
                    />
                </div>
                <div className="text-center">
                    Hey I&apos;m
                    <span className="name">&nbsp;#Hemanth</span>
                </div>
                <TerminalView />
                <div className="text-center">
                    Languages & Frameworks {renderSkills("programming")}
                </div>
                <div className="text-center">
                    Web Technologies {renderSkills("web")}
                </div>
                <div className="text-center">Tools {renderSkills("tools")}</div>
                <div className="text-center">
                    Databases {renderSkills("databases")}
                </div>
            </div>
        </div>
    )
}
export default AboutMe
