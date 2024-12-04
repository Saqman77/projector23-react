import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer";
import { teamMembers } from "./TeamData";

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
   
    return (
      <div className="more_content">
        <div className="preshow"></div>
  
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