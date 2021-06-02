import React from "react";
import BioPic from "../assets/bio-pic.jpg";

export const Home = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-5 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profilePic img-fluid" src={BioPic} alt="profile pic" />
                    </div>
                </div>
                <div className="col-lg-7 col-xm-12">
                    <h1 className="header">Welcome to my portfolio</h1>
                    <p>My name is Hanh, I’m a web developer with an art & design background. In other words, I went to art school and returned a programmer.</p>

                    <p>Oops...</p>

                    <p>I live and work in Seattle, WA. My place in the world seems to be at the intersection of creativity and logic. All projects are a problem to be solved, whether it’s to do with design or code—only, the tools change. My process is iterative; I approach each problem as a learning experience that informs the rest of the project, which means that I tend to not rely on full design mockups. Most of the time, I do a few sketches to flesh out a concept, and immediately dive into a working prototype that is much more flexible than jumping back and forth between code and Adobe Suite.</p>

                    <p>My formal art & design training taught me to carefully consider my audience and what experience I intend for them to have through my work. Who is visiting your site? What are they looking for? How do they find it? What analytics are available to base our decisions on?</p>

                    <p>My focus is mobile-first responsive websites with HTML, JavaScript, MySQL, React, etc. I'm also dabbling in Python, C++ and other coding languages for video game development</p>
                </div>
            </div>
        </div>
    )
}

export default Home
