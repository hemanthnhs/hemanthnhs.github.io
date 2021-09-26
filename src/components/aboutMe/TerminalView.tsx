import "./AboutMe.css"

const TerminalView = ({ isMobile }: { isMobile: boolean }) => {
    const educationMsg = isMobile
        ? "Masters in Computer Science from NEU"
        : "Master of Science in Computer Science from Northeastern University"
    const userName: string = "hemanth"
    const terminalWebStyle: any = { marginLeft: "15%", width: "70%" }
    const terminalMobileStyle: any = { marginLeft: "3%", width: "94%" }
    const terminalStyle = isMobile ? terminalMobileStyle : terminalWebStyle
    return (
        <div>
            <div style={terminalStyle} id="terminal-bar">
                <h1 className="terminal-heading">Hemanth Sai Nimmala: ~</h1>
            </div>
            <div style={terminalStyle} className="terminal">
                <div>
                    <span className="terminal-user">
                        {userName}@Work:<span className="tilde-seperation">~</span>
                        <span className="dollar-prompt">$</span>
                    </span>
                    <span
                        className={"terminal-text" + (isMobile && " mobile-block")}
                    >
                        <p className="inline">
                            Senior Software Engineer at Fidelity Investments
                        </p>
                    </span>
                </div>
                {!isMobile && <div>
                    <span className="terminal-user">
                        {userName}@Previous:<span className="tilde-seperation">~</span>
                        <span className="dollar-prompt">$</span>
                    </span>
                    <span
                        className={"terminal-text" + (isMobile && " mobile-block")}
                    >
                        <p className="inline">
                            Ex-Software Engineer at OpenText, Voonik
                        </p>
                    </span>
                </div>
                }
                
                <div>
                    <span className="terminal-user">
                        {userName}@Education:
                        <span className="tilde-seperation">~</span>
                        <span className="dollar-prompt">$</span>
                    </span>
                    <span
                        className={"terminal-text" + (isMobile && " mobile-block")}
                    >
                        <p className="inline">{educationMsg}</p>
                    </span>
                </div>
                <div>
                    <span className="terminal-user">
                        {userName}@Interest:
                        <span className="tilde-seperation">~</span>
                        <span className="dollar-prompt">$</span>
                    </span>
                    <span
                        className={"terminal-text" + (isMobile && " mobile-block")}
                    >
                        <p className="inline">
                            I love developing Software Applications...
                        </p>
                    </span>
                    <span id="terminal-cursor-prompt"></span>
                </div>
            </div>
        </div>
    )
}

export default TerminalView
