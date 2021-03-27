import "./AboutMe.css"
import { Avatar, Image } from "antd"
import { Tag } from "antd"
import { useEffect, useState } from "react"
import axios from "axios"
import { Icons } from "./IconComponents"
import TerminalView from "./TerminalView"
const AboutMe = ({ isMobile }: { isMobile: boolean }) => {
    const [skills, setSkills] = useState<any>({
        programming: [],
        web: [],
        tools: [],
        databases: [],
        certifications: [],
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
        let skill_list = skills[skill]
        let res: any = []
        skill_list.forEach((skill_item: ["string", "string"]) => {
            if (skill_item[1]) {
                res.push(
                    <Tag
                        key={skill_item[0]}
                        className="skill-tag"
                        color="#55acee"
                        icon={Icons[skill_item[1]]}
                    >
                        {skill_item[0]}
                    </Tag>
                )
            } else {
                res.push(
                    <Tag className="skill-tag" color="#55acee" key={skill_item[0]}>
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
                        icon={
                            <Image
                                src={"./assets/images/profile-image.jpeg"}
                                alt="Hemanth Sai Nimmala"
                                preview={false}
                            />
                        }
                        alt="Hemanth Sai Nimmala"
                    />
                </div>
                <div className="text-center">
                    Hey I&apos;m
                    <span className="name">&nbsp;#Hemanth</span>
                </div>
                <TerminalView isMobile={isMobile} />
                <div className="text-center">
                    <span
                        className={"skill-label" + (isMobile ? " mobile-block" : "")}
                    >
                        Languages & Frameworks
                    </span>
                    {renderSkills("programming")}
                </div>
                <div className="text-center">
                    <span
                        className={"skill-label" + (isMobile ? " mobile-block" : "")}
                    >
                        Web Technologies
                    </span>
                    {renderSkills("web")}
                </div>
                <div className="text-center">
                    <span
                        className={"skill-label" + (isMobile ? " mobile-block" : "")}
                    >
                        Databases
                    </span>
                    {renderSkills("databases")}
                </div>
                <div className="text-center">
                    <span
                        className={"skill-label" + (isMobile ? " mobile-block" : "")}
                    >
                        Tools
                    </span>
                    {renderSkills("tools")}
                </div>
                <div className="text-center">
                    <span
                        className={"skill-label" + (isMobile ? " mobile-block" : "")}
                    >
                        Certifications
                    </span>
                    {renderSkills("certifications")}
                </div>
            </div>
        </div>
    )
}
export default AboutMe
