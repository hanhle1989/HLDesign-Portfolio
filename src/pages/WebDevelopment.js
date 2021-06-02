import React from "react";
import Projects from "../components/Projects";
import projects from "../projects"

export const WebDevelopment = () => {
    return (
        <div>
            <Projects projects={projects}/>
        </div >
    )
}

export default WebDevelopment
