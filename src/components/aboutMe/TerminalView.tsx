import "./AboutMe.css"

const TerminalView = () => {
    return (
        <div>
            <div id="terminal-bar">Hemanth Sai Nimmala: ~</div>
            <div className="terminal">
                <div>
                    <span className="terminal-user">
                        hemanth@Work:<span className="tilde-seperation">~</span>
                        <span className="dollar-prompt">$</span>
                    </span>
                    <span className="terminal-text">
                        Ex-Software Engineer at Fidelity, OpenText, Voonik
                    </span>
                </div>
                <div>
                    <span className="terminal-user">
                        hemanth@Education:<span className="tilde-seperation">~</span>
                        <span className="dollar-prompt">$</span>
                    </span>
                    <span className="terminal-text">
                        Master of Science in Computer Science from Northeastern
                        University
                    </span>
                </div>
                <div>
                    <span className="terminal-user">
                        hemanth@Message:<span className="tilde-seperation">~</span>
                        <span className="dollar-prompt">$</span>
                    </span>
                    <span className="terminal-text">
                        I love developing Software Applications...
                    </span>
                    <span id="terminal-cursor-prompt"></span>
                </div>
            </div>
        </div>
    )
}

export default TerminalView
