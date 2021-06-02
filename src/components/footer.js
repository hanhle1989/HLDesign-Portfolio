import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const footer = () => {
    return (
        <div className="container-fluid footer">
            <div className="box">
                <a href="https://github.com/hanhle1989"><FontAwesomeIcon className="icon" icon={faGithub} size="2x" /></a>
                <a href="https://www.linkedin.com/in/hanh-le-designs/"><FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" /></a>
            </div>
            <a href="mailto:hanhdtle@gmail.com" title="email" rel="me" class="contact-text" target="_blank">
                hanhdtle@gmail.com
                </a>

            <div className="copyright">© 2021 Hanh Le Designs. All rights reserved.</div>
        </div>
    )
}

export default footer