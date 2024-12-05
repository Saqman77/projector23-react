import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import BackButton from "../components/back_button";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import work_bg from "../assets/vid/homebg-video.mp4";
import contactBg from "../assets/images/background/contact-background-1.webp"
import "../styles/contact.css";

const Contact = () => {
  const videoRef = useRef(null);
  const officeRef = useRef(null);
  const linkedInRef = useRef(null)
  const navigate = useNavigate();

  useEffect(() =>{
    const adjustContainerWidth = () => {
      if(officeRef.current)
      {
        const containerWidth = officeRef.current.getBoundingClientRect().width;
        document.documentElement.style.height = "100%";
        linkedInRef.current.style.width =`${containerWidth}px`;
      }
    }

        // Adjust width on load
        adjustContainerWidth();

        // Adjust width on window resize
        window.addEventListener("resize", adjustContainerWidth);
    
        return () => {
          window.removeEventListener("resize", adjustContainerWidth);
          linkedInRef.current.style.width = ""; // Reset width on cleanup
          document.documentElement.style.height = "";
        };

  },[])
  
  useEffect(() => {
    // Set the body background for the Contact page
    document.body.style.background = `url(${contactBg})`;
    document.body.style.backgroundSize = "cover";

    // Cleanup: Reset the background when leaving the Contact page
    return () => {
      document.body.style.background = "";
      document.body.style.backgroundSize = "";
    };
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.muted = true;
      videoElement.play().catch((error) => {
        console.error("Error attempting to play video:", error);
      });
    }
  }, []);

  // Navigate to previous page
  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="contact" >
      <Navbar  />
      <video
            id="backGb"
            ref={videoRef}
            src={work_bg}
            autoPlay
            loop
            muted
            playsInline
          />
        <div className="contact-wrapper">
          <div className="cont_info" >
            <h1>CONTACT</h1>
            <div className="info">
              <p>Email : </p>
              <ul>
                <li><p>tina@projector23.de</p></li>
                <li><p>martin@projector23.de</p></li>
                <li><p>richard@projector23.de</p></li>
              </ul>
            </div>
            <div className="info" >
              <p>Phone : </p>
              <ul>
                <li><p>+49 (0) 30 648 396 50</p></li>
              </ul>
            </div>
          </div>
          <div className="office_info">
            <div className="container office" ref={officeRef} >
              <p className="subtitle" >Office</p>
              <ul className="sublist">
                <p>PROJECTOR23 GmbH & Co.KG<br/> Kiefholzstr.2<br/>12435 Berlin Germany</p>
                {/* <li><p>tina@projector23.de</p></li>
                <li><p>martin@projector23.de</p></li>
                <li><p>richard@projector23.de</p></li> */}
              </ul>
            </div>
          </div>
          <div className="linkedin_info" >
            <BackButton className="linkedIn-btn" onClick={handleBackButtonClick} />
            <div className="container linkedIn-container" ref={linkedInRef}>
              <p className="subtitle">LinkedIn</p>
              <ul className="sublist">
                <li><a href="https://www.linkedin.com/in/martina-sakova-8058732b/">Martina Sakova</a></li>
                <li><a href="https://www.linkedin.com/in/martin-kleinmichel-70a42226/">Martin Kleinmichel</a></li>
                <li><a href="https://www.linkedin.com/in/richard-sako-a62764137/">Richard Sako</a></li>
              </ul>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default Contact;
