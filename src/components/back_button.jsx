import "../styles/back_botton.css";
import useResponsive from "../utils/useResponsive";

const BackButton = ({ onClick, className }) => {
  const screenSize = useResponsive()
  return (
    <div className={`back_botton ${className}`} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="146"
        height="46"
        viewBox="0 0 146 46"
        fill="none"
      >
        <path
          d="M0.878671 20.8787C-0.292899 22.0503 -0.292899 23.9497 0.878671 25.1213L19.9706 44.2132C21.1421 45.3848 23.0416 45.3848 24.2132 44.2132C25.3848 43.0416 25.3848 41.1421 24.2132 39.9706L7.24264 23L24.2132 6.02944C25.3848 4.85787 25.3848 2.95837 24.2132 1.7868C23.0416 0.615224 21.1421 0.615224 19.9706 1.7868L0.878671 20.8787ZM146 20L2.99999 20V26L146 26V20Z"
          fill="url(#paint0_linear_1424_424)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1424_424"
            x1="2.99999"
            y1="22.5"
            x2="146"
            y2="22.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
      Back
    </div>
  );
};

export default BackButton;
