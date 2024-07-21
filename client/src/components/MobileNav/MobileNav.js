import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./MobileNav.css";
import Fade from "react-reveal/Fade";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { MdOutlineCastForEducation } from "react-icons/md";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import { MdWork } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-scroll";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  //handle open
  const handleOpen = () => {
    setOpen(!open);
  };

  //handle menu clicks
  const handleMenuClick = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <AiOutlineMenuFold
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}
          <span className="mobile-nav-title">My Portfolio App</span>
        </div>

        {open && (
          <div className="mobile-nav-menu">
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
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
                    >
                      <IoIosContacts />
                      Contact US
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
