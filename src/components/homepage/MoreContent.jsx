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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Adjust duration
    // console.log(images);
    return () => clearInterval(interval);
  }, []);
   
    return (
      <div className="more_content">
        <div className="preshow" style={{
          animation: "fadeInOut 3s infinite",
          backgroundImage:` url(${images[currentImageIndex]}`,
          backgroundRepeat:"no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>
  
        <h1 className="ourteam">OUR TEAM</h1>
        <div className="our_team">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
  
        <div className="btns">
          {['works', 'contact'].map((page) => (
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