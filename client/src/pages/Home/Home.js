import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GoSun } from "react-icons/go";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();

  // Handle theme toggle
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <div className="container-fluid home-container" id="home">
      <div className="theme-btn" onClick={handleTheme}>
        {theme === "light" ? (
          <BsFillMoonStarsFill size={30} />
        ) : (
          <GoSun size={30} />
        )}
      </div>
      <div className="container home-content">
        <Fade right>
          <h2>Hi 👋 I'm Dhiraj Tiwari</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer!",
                  "Mern Stack Developer!",
                  "React Native Developer!",
                  "AI Developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </Fade>
        <Fade bottom>
          <div className="home-buttons">
            <a
              href="https://api.whatsapp.com/send?phone=8882700818"
              rel="noreferrer"
              target="_blank"
              className="btn btn-hire"
            >
              Hire Me
            </a>

            <a
              href="/path/to/your/resume.pdf"
              className="btn btn-cv"
              target="_blank"
              rel="noreferrer"
            >
              My Resume
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
