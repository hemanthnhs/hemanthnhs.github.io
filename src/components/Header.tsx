import { Layout, Menu, Breadcrumb } from "antd"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { IoPersonCircleOutline, IoCodeWorkingOutline } from "react-icons/io5"
import { GrProjects } from "react-icons/gr"

const { Header, Content, Footer } = Layout
const HeaderComponent = () => {
    return (
        <div>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
                <Menu.Item>
                    <span className="linkedin-btn">
                        <FaLinkedin />
                    </span>
                </Menu.Item>
                <Menu.Item>
                    <span className="github-btn">
                        <FaGithub />
                    </span>
                </Menu.Item>
                <Menu.Item className="pull-right" key="3">
                    <GrProjects className="logo-btn" />
                    Projects
                </Menu.Item>
                <Menu.Item className="pull-right" key="2">
                    <IoCodeWorkingOutline className="logo-btn" />
                    Work Experience
                </Menu.Item>
                <Menu.Item className="pull-right" key="1">
                    <IoPersonCircleOutline className="logo-btn" />
                    About Me
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default HeaderComponent
