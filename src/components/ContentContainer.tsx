import AboutMe from "./aboutMe/AboutMe"
import ProjectContainer from "./projects/Projects"
import WorkExperience from "./work/WorkExperience"
import { Divider } from "antd"
import { useEffect, useRef, useState } from "react"

const useOnScreen = (ref: any) => {
    const [isIntersecting, setIntersecting] = useState(false)

    const observer = new IntersectionObserver(
        ([entry]) => {
            setIntersecting(entry.isIntersecting)
        },
        { threshold: 0.5 }
    )

    useEffect(() => {
        observer.observe(ref.current)
        return () => {
            observer.disconnect()
        }
    }, [])

    return isIntersecting
}

const setCurrentMenu = (
    setMenuCallback: any,
    aboutVisible: boolean,
    workVisible: boolean,
    projectVisible: boolean
) => {
    if (aboutVisible) {
        setMenuCallback("about")
    } else if (projectVisible) {
        setMenuCallback("project")
    } else {
        setMenuCallback("work")
    }
}

const ContentContainer = ({ setMenuInView, isMobile }: any) => {
    const aboutRef: any = useRef()
    const workRef: any = useRef()
    const projectRef: any = useRef()
    const aboutVisible = useOnScreen(aboutRef)
    const workVisible = useOnScreen(workRef)
    const projectVisible = useOnScreen(projectRef)
    setCurrentMenu(setMenuInView, aboutVisible, workVisible, projectVisible)
    return (
        <div>
            <div ref={aboutRef} className="view-container" id="about">
                <AboutMe isMobile={isMobile} />
            </div>
            <span id="work"></span>
            <Divider>{isMobile && "Work"}</Divider>
            <div ref={workRef} className="view-container">
                <WorkExperience isMobile={isMobile} />
            </div>
            <Divider>{isMobile && "Projects"}</Divider>
            <div ref={projectRef} className="view-container" id="projects">
                <ProjectContainer isMobile={isMobile} />
            </div>
        </div>
    )
}

export default ContentContainer
