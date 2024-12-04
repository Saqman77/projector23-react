import React from "react";
import Navbar from "../navbar";
import "../../styles/homepage.css";
import backGb from "../../assets/vid/homebg-video.mp4";

const InfoParagraph = ({ children }) => (
    <p className="info-paragraph">{children}</p>
  );
const Top = ({ videoRef }) => {
  
    return (
      <div className="top">
        <Navbar />
        <div className="info">
          <div className="bgvid">
            <video
              id="backGb"
              ref={videoRef}
              src={backGb}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="main" >
            <h1>PROJECTOR23</h1>
            <h1>CREATIVE STUDIO</h1>
          </div>
  
          <div className="moreIf" >
            <InfoParagraph>
              Projector23 is a Berlin-based film production company, VFX studio
              and hub for innovative solutions. Since 2008 we create
              documentaries, fiction, animation and image films. We are constantly
              searching for fresh solutions with a character of its own, with a
              special interest in pressing social issues.
            </InfoParagraph>
            <InfoParagraph>
              Our feature film SUMMER REBELS was shortlisted for the 2021 German
              Film Award and won the German Film Critics' Award. It screened at
              numerous international film festivals and was theatrically released
              in Germany, Austria, the Czech Republic, and Slovakia. Discover our
              new film projects in the FILMS section.
            </InfoParagraph>
            <InfoParagraph>
              As service production we offer: Conceptual Framework | Storytelling
              | 2/3D, Fulldome, Animation, VFX, VR | Motion & AI Prompt Design |
              For more information we recommend you to visit our WORKS section or
              get in touch with us.
            </InfoParagraph>
          </div>
        </div>
      </div>
    );
  };

export default Top;