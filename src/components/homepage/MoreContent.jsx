import React, {useEffect, useState}from "react";
import { Link } from "react-router-dom";
import Footer from "@components/footer.jsx";
import { teamMembers, images } from "./TeamData";
// import { images } from "./imagePaths";

const TeamMember = ({ name, image, role }) => (
    <div className="mber">
      <p>{name}</p>
      <div className="img">
        <img src={image} alt={`${name} - ${role}`} />
      </div>
      <p>{role}</p>
    </div>
  );
  
  const MoreContent = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState("fade-in");
  
    useEffect(() => {
      const interval = setInterval(() => {
        setFadeClass("fade-out");
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          setFadeClass("fade-in");
        }, 500); // Match the fade-out duration
      }, 1500); // Delay between images
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="more_content">
        <div className="image-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`image-slide ${
                index === currentImageIndex ? fadeClass : ""
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>
  
        <h1 className="ourteam">OUR TEAM</h1>
        <div className="our_team">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
  
        <div className="btns">
          {["works", "contact"].map((page) => (
            <Link key={page} to={`/${page}`} target="_top">
              <div className="btn">{page.toUpperCase()}</div>
            </Link>
          ))}
        </div>
  
        <Footer />
      </div>
    );
  };
  
  export default MoreContent;
  