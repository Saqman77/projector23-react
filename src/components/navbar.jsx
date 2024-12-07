import "../styles/navbar.css";
import logo from "../assets/images/logo.png";
import { NavLink ,Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [mob_Nav_open, setMobNavOpen] = useState(false);
  const navRef = useRef(null);
  const mobNavRef = useRef(null);
  const prevScrollPosition = useRef(window.scrollY);

  const handle_open_mob_nav = () => {
    setMobNavOpen((prev) => !prev);
  };

  
  useEffect(() => {
    const adjustBodyPadding = () => {
      if (navRef.current) {
        const navbarHeight = navRef.current.getBoundingClientRect().height;
        document.body.style.paddingTop = `${navbarHeight}px`;
      }
    };

    // Adjust padding on load
    adjustBodyPadding();

    // Adjust padding on window resize
    window.addEventListener("resize", adjustBodyPadding);

    return () => {
      window.removeEventListener("resize", adjustBodyPadding);
      document.body.style.paddingTop = ""; // Reset padding on cleanup
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const headerElement = navRef.current;
      const mobNav = mobNavRef.current;

      if (!headerElement) return;

      // Update backdrop blur
      if(window.innerWidth > 1000)
      {
        if (currentScrollPosition === 0) {
        headerElement.style.backdropFilter = "blur(0px)";
        headerElement.style.backgroundColor = "#c4adf000";
        headerElement.style.webkitBackdropFilter = "blur(0px)";
        headerElement.style.boxShadow = "none";
      } else {
        headerElement.style.backdropFilter = "blur(20px)";
        headerElement.style.backgroundColor = "#c4adf08a";  
        headerElement.style.webkitBackdropFilter = "blur(20px)";
        headerElement.style.boxShadow = "0px 1px 8px 0px #00000026";
      }}

     else {
      // Mobile header backdrop blur 
    if (currentScrollPosition === 0)
      {
        mobNav.classList.add("navTop");
      }

    else {
        mobNav.classList.remove("navTop");
      }}
      

      // Update header visibility based on scroll direction
      if (prevScrollPosition.current >= currentScrollPosition) {
        headerElement.style.transform = "translateY(0px)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
        setMobNavOpen(false)
      }

      // Update previous scroll position
      prevScrollPosition.current = currentScrollPosition;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mob_Nav_open]);
  
  
  return (
    <div className="navbb" ref={navRef}>
      <div  className={`navbar mobile ${mob_Nav_open ? "" : "closed"} `} ref={mobNavRef}>
        <nav>
          <div className="btn_ham" >
            <Link to="/">
              <div className="logo" >
                <img src={logo} alt="" />
              </div>
            </Link>
            <div className="ham" onClick={handle_open_mob_nav}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M20 7L4 7"
                    stroke="purple"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>{" "}
                  <path
                    // opacity="0.5"
                    d="M20 12L4 12"
                    stroke="purple"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>{" "}
                  <path
                    d="M20 17L4 17"
                    stroke="purple"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
          <ul>
         {[
          { path: "/", name: "COMPANY."},
          { path: "/works", name: "WORKS."},
          { path: "/news", name: "NEWS."},
          { path: "/imprint", name: "IMPRINT."},
          { path: "/contact", name: "CONTACT."},
         ].map(({path, name}) =>(
          <li key={path}>
            <NavLink
            to={path}
            style={({ isActive }) => ({
              color: isActive ? "#f7f7f7" : "#7f3e98cc",
              fontFamily: "Outfit",
              fontSize: "17.7px",
              fontWeight: 800,
              letterSpacing: "0.01em",
              textDecoration: "none",
              position: "relative",
              cursor: "pointer",
              })}
              >
              {name}
              {/* <span>
                {name}
              </span> */}
            </NavLink>
          </li>
         ))}
          </ul>
        </nav>
      </div>
      <div className="navbar pc">
        <nav>
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </Link>
          <ul>
            {[
              { path: "/", name: "COMPANY." },
              { path: "/works", name: "WORKS." },
              { path: "/news", name: "NEWS." },
              { path: "/imprint", name: "IMPRINT." },
              { path: "/contact", name: "CONTACT." },
            ].map(({ path, name }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  style={({ isActive }) => ({
                    color: isActive ? "#f7f7f7" : "#7f3e98cc",
                    fontFamily: "Outfit",
                    fontSize: "21.7px",
                    fontWeight: 800,
                    letterSpacing: "0.01em",
                    textDecoration: "none",
                    position: "relative",
                    cursor: "pointer",
                    // transition: "color 0.3s ease-in-out"
                  })}
                  onMouseEnter={(e) => {
                    const span = e.currentTarget.querySelector("span");
                    const isActive = e.currentTarget.classList.contains("active");
                    if (span) {
                      if(!isActive)
                      {span.style.transform = "translateY(0)";}
                    }
                  }}
                  onMouseLeave={(e) => {
                    const span = e.currentTarget.querySelector("span");
                    if (span) {
                      // Only reset if not active
                      const isActive = e.currentTarget.classList.contains("active");
                      if (!isActive) {
                        span.style.transform = "translateY(100%)";
                      }
                      // else
                      // {
                      //   span.style.transform = "translateY(0)";
                      // }
                    }
                  }}
                >
                  {name}
                  <span
                    style={{
                      color: "#f7f7f7",
                      fontSize: "21.7px",
                      position: "absolute",
                      transform: "translateY(100%)",
                      left: 0,
                      transition: "transform 0.3s ease-in-out",
                    }}
                  >
                    {name}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
