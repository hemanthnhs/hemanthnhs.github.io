import { Menu } from "antd"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { IoPersonCircleOutline, IoCodeWorkingOutline } from "react-icons/io5"
import { GrProjects } from "react-icons/gr"

const HeaderComponent = ({ currentMenuInView, isMobile }: any) => {
    return (
        <div className="header">
            <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={["about"]}
                selectedKeys={[currentMenuInView]}
                selectable={!isMobile}
            >
                {!isMobile && currentMenuInView != "about" && (
                    <a
                        href="https://www.linkedin.com/in/hemanthnhs/"
                        target="_blank"
                        rel="noreferrer"
                        className="header-name"
                    >
                        #Hemanth
                    </a>
                )}
                <Menu.Item>
                    <a
                        href="https://www.linkedin.com/in/hemanthnhs/"
                        target="_blank"
                        className="linkedin-btn"
                        rel="noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a
                        href="https://github.com/hemanthnhs"
                        target="_blank"
                        className="github-btn"
                        rel="noreferrer"
                    >
                        <FaGithub />
                    </a>
                </Menu.Item>
                {!isMobile && (
                    <>
                        <Menu.Item className="pull-right" key="project">
                            <a href="#projects">
                                <GrProjects className="logo-btn" />
                                Projects
                            </a>
                        </Menu.Item>
                        <Menu.Item className="pull-right" key="work">
                            <a href="#work">
                                <IoCodeWorkingOutline className="logo-btn" />
                                Work Experience
                            </a>
                        </Menu.Item>
                        <Menu.Item className="pull-right" key="about">
                            <a href="#">
                                <IoPersonCircleOutline className="logo-btn" />
                                About Me
                            </a>
                        </Menu.Item>
                    </>
                )}
            </Menu>
        </div>
    )
}

export default HeaderComponent
