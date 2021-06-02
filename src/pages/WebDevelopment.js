import React from "react";
import Projects from "../components/projects";
import projects from "../utils/projects"

export const webdevelopment = () => {
    return (
        <div>
            <Projects projects={projects}/>
        </div >
    )
}

export default webdevelopment
