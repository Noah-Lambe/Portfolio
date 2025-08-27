import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import ProfilePhoto from "../assets/Profile-photo3.jpg";

import SplitText from "./SplitText";
import TextType from "./TextType";
import ShinyText from "./ShinyText";
import Magnet from "./Magnet";
import CircularText from "./CircularText";
import GlareHover from "./GlareHover";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <CircularText
          text="• USER EXPERIENCE • VISION • CONSISTENCY • CURIOSITY " //maybe DESIGN in place of VISION
          radius={130}
          spinDuration={16}
          onHover="slowDown"
          center={
            <img
              src={ProfilePhoto}
              alt="Noah Lambe"
              style={{ width: 200, height: 200, borderRadius: "50%" }}
            />
          }
        />
        <div className="intro">
          <SplitText
            text={
              <h1>
                Hi, I'm <span>Noah</span>.
              </h1>
            }
            className="animated-text"
            delay={100}
            duration={2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          {/* <TextType
            text={["Hi,", " I'm", " Noah."]}
            textColors={["#ffffff", "#ffffff", "#ffdd57"]}
            typingSpeed={125}
            pauseDuration={1500}
            showCursor
            cursorCharacter="█"
            loop={false}
          /> */}

          <p>
            A <strong>Front-End Developer</strong> Crafting Engaging Web &
            Native Experiences.
          </p>

          <GlareHover
            as={Link}
            to="/contact"
            className="cta-button"
            background="transparent"
            width="auto"
            height="auto"
            borderRadius="5px"
          >
            Contact me
          </GlareHover>

          {/* <Link to="/projects" className="cta-button">
                See my Work
              </Link> */}

          <p className="subtext">
            Interested in collaborating? Feel free to reach out and let's build
            something great together.
          </p>
          {/* <Magnet padding={50} disabled={false} magnetStrength={50}>
            <Link to="/contact" className="secondary-button">
              Get in Touch
            </Link>
          </Magnet> */}
          <Magnet
            maxTranslate={60}
            magnetStrength={0.8}
            scaleOnActive={0.08}
            padding={140}
          >
            <Link to="/contact" className="secondary-button">
              Get in Touch
            </Link>
          </Magnet>
        </div>
      </div>
    </section>
  );
}

export default Home;
