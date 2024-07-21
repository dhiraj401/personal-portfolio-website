import React from "react";
import "./Menus.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { MdOutlineCastForEducation } from "react-icons/md";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import { MdWork } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { Link } from "react-scroll";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src="p-Image.jpeg" alt="profile pic" />
            </div>
          </Zoom>

          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <MdOutlineCastForEducation />
                    Education
                  </Link>
                </div>
              </div>

              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="Technology"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <GrTechnology />
                    Technology
                  </Link>
                </div>
              </div>

              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="Project"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <PiProjectorScreenChartFill />
                    Project
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="Work"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <MdWork />
                    Work Experience
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <IoIosContacts />
                    Contact US
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome title="Home" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout title="About" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdOutlineCastForEducation title="Education" />
                </Link>
              </div>
            </div>

            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="Technology"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <GrTechnology title="Technology" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="Project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <PiProjectorScreenChartFill title="Project" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="Work"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdWork title="work exeprience" />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <IoIosContacts title="contacts us" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
