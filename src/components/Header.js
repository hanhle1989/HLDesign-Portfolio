import React from "react"
import Typed from "react-typed"


export const Header = () => {
    return (
        
                <div className="header-wrapper">
                    <div className="main-info">
                        <h1>Hi, My name is Hanh. I am</h1>
                        <Typed
                            className="typed-text"
                            strings={["An Artist", "A Graphic Designer", "A Web Developer"]}
                            typeSpeed={70}
                            backSpeed={50}
                            loop
                        />
                        <a href="WebDevelopment" className="btn-main-offer">View My Works</a>
                    </div>
                </div>
            
    )
}

export default Header