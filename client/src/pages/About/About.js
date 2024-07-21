import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="About">
          <div className="row">
            <div className="col-md-6   about-img">
              <img src="p-Image.jpeg" alt="profile_pic" />
            </div>
            <div className="col-md-6 about-content">
              <h1>About me</h1>
              <p>
                Hello, I'm Dhiraj Tiwari. I have completed my Bachelor of
                Technology in Computer Science and Engineering (B.Tech CSE). My
                passion lies in coding, where I find immense joy in solving
                complex problems and creating innovative solutions. I am
                particularly fascinated by the endless possibilities in the
                field of artificial intelligence. In addition to my love for
                coding, I am an avid traveler. Exploring new places and
                experiencing different cultures not only enriches my life but
                also broadens my perspective, which I believe is crucial for a
                developer in today's globalized world. Looking ahead, my goal is
                to become an AI developer at Google. I am committed to
                continuously learning and honing my skills to contribute to
                groundbreaking advancements in artificial intelligence and make
                a meaningful impact in the tech industry.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
