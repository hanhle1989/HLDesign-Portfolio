import React from "react";

function Projects(props) {
    return (
        <div id="projects" className="portfolio-wrapper">
            <div className="container">
                <h1 className="header text-center py-5">PAST PROJECTS</h1>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {props.projects.map(item => (<div key={item.id}>
                        <div class="col">
                            <div class="card">
                                <h4 className="card-title text-center">{item.name}</h4>
                                <img className="portfolio-image" src={item.image} />
                                <div className="card-body">
                                    <div className="d-grid gap-2">
                                        <a href={item.github} className="btn btn-outline-dark" type="button">GitHub Depository</a>
                                        <a href={item.deployed} className="btn btn-outline-dark" type="button">Deployed Application</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
