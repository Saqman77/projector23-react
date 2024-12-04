// import { useNavigate } from "react-router-dom";
// import BackButton from "../components/back_button";
// import Footer from "../components/footer";
// import Navbar from "../components/navbar";
// import "../styles/news.css";

// const News = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="news">
//       <Navbar />
//       <h1>News</h1>
//       <NewsTap />
//       <NewsTap />
//       <NewsTap />
//       <NewsTap />
//       <NewsTap />
//       <NewsTap />

//       <BackButton onClick={() => navigate(-1)} />
//       <Footer />
//     </div>
//   );
// };

// const NewsTap = () => {
//   return (
//     <div className="news_tap">
//       <p className="title">Dailycreative</p>
//       <div className="info">
//         <div className="img"></div>
//         <div className="more">
//           <p>
//             Is a forward-thinking design agency specializing in the development
//             of innovative projects, including the cutting-edge Projector 23. Our
//             team combines creativity and technical expertise to deliver
//             exceptional design and development solutions that cater to the
//             unique needs of our clients. At DailyCreattive, we are committed to
//             pushing the boundaries of design, ensuring that every project we
//             undertake not only meets but exceeds our clients' expectations.
//             Projector 23 is a testament to our dedication to excellence and our
//             passion for creating impactful, user-centric designs.
//           </p>
//           <p>Directed by Alejandro Abdon</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default News;

import { useNavigate } from "react-router-dom";
import BackButton from "../components/back_button";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../styles/news.css";
import React from "react";
import lovebot from "../assets/images/news/news2.jpeg";
import avi from "../assets/images/news/news-avi.png";

const News = () => {
  const navigate = useNavigate();

  // Array to dynamically render NewsTap components
  const newsItems = [
    {
      pic: avi,
      title: "Dailycreative",
      paragraph: `Is a forward-thinking design agency specializing in the development
      of innovative projects, including the cutting-edge Projector 23. Our
      team combines creativity and technical expertise to deliver
      exceptional design and development solutions that cater to the
      unique needs of our clients. At DailyCreative, we are committed to
      pushing the boundaries of design, ensuring that every project we
      undertake not only meets but exceeds our clients' expectations.
      Projector 23 is a testament to our dedication to excellence and our
      passion for creating impactful, user-centric designs.`,
      director: "Alehandro Abdon"
    },
    {
      pic: lovebot,
      title: "Lovebots",
      paragraph: `A feature film in development, 100min
      2021 | YEEEE.A.I.!!!!! We are happy to announce that the development of our new film project LOVEBOTS by author duo Sülke Schulz & Martina Sakova was supported by BKM, the German Federal Ministry of Culture.`,
      director: "Team Projector23"
    }
  ];
  


  return (
    <div className="news" >
    <Navbar />
    <h1>News</h1>
    {newsItems.map((item, index) => (
      <NewsTap
        key={index}
        title={item.title}
        pic={item.pic}
        paragraph={item.paragraph}
        director={item.director}
      />
    ))}
    <BackButton onClick={() => navigate(-1)} />
    <Footer />
  </div>
  );
};


const NewsTap = React.memo(({ title, pic, paragraph, director }) => {
  
  return (
    <div className="news_tap" >
      <p className="title">{title}</p>
      <div className="info">
        <div className="img">
          <img className="img"
          
            src={pic}
            alt={title}
          />
        </div>
        <div className="more">
          <p>{paragraph}</p>
          <p>Directed by {director}</p>
        </div>
      </div>
    </div>
  );
});

export default News;
