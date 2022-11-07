import React from "react";
import "./landing.css";
import image from "../../assets/images/ExerciseWallpaper.jpg";
import { TypeAnimation } from "react-type-animation";

function Landing() {
  return (
    <div className="container" id="landing">
      <div className="landingBg">
        <img src={image} alt="exercise wallpaper"></img>
      </div>
      <div className="centered">
        <div>Transform</div>
        <TypeAnimation
          sequence={[
            1000,
            "Your Body",
            3000,
            "Your Mindset",
            3000,
            "Your Lifestyle",
            3000,
          ]}
          wrapper="div"
          speed={10}
          cursor={true}
          repeat={Infinity}
        />
        <div>
          With{" "}
          <span
            style={{
              textDecoration: "underline",
              textDecorationColor: "#770000",
            }}
          >
            ATG
          </span>
          .
        </div>
      </div>
    </div>
  );
}

export default Landing;
