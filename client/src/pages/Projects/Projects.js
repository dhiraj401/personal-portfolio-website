import React from "react";
import "./project.css";
import Spin from "react-reveal/Spin";

const Projects = () => {
  return (
    <>
      <div className=" project" id="Project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Welcome to my personal portfolio website! This space is dedicated
          to showcasing my skills, projects, and professional journey. Blood
          Bank website, your go-to platform for blood donation and recipient
          services. our e-commerce website, your one-stop shop for an amazing
          shopping experience. We offer a wide range of products across various
          categories, ensuring you find exactly what you're looking for.
        </p>
        {/*card design*/}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack MERN</span>
                  <img src="Screenshot.png" alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Nodemailer</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      Personal Portfolio Website
                    </h5>
                  </div>
                  <a className="ad-btn" href="#">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack MERN</span>
                  <img src="bloodbank.jpg" alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Blood Bank Website</h5>
                  </div>
                  <a className="ad-btn" href="#">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack MERN</span>
                  <img src="E-Commerce.jpg" alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">E-Commerce Website</h5>
                  </div>
                  <a className="ad-btn" href="view">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
