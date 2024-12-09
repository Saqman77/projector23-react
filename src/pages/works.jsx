import Navbar from "@components/navbar.jsx";
import "@styles/works.css";
import logos from "@images/logos.png";
import testIm from "@images/img3.jpeg";
import fic_work from "@images/fic_work.jpg";
import docum_im from "@images/docum_im.jpg";
import char_anim from "@images/char_anim.jpg";
import inov_img from "@images/inov_img.jpg";
import sci_img from "@images/sci_img.jpg";
// import work_bg from "../assets/vid/workbg-video.mp4";
import {lazy, Suspense, useEffect, useRef, useState } from "react";
import BackButton from "@components/back_button";
import Footer from "@components/footer";
import { useNavigate } from "react-router-dom";

// fiction films images import
import fic1Im1 from "@images/Ficition/im1.jpeg";
import fic1Im2 from "@images/Ficition/im2.jpeg";
import fic1Im3 from "@images/Ficition/im3.jpeg";
import fic2Im1 from "@images/Ficition/im4.webp";
import fic2Im2 from "@images/Ficition/im5.jpeg";
import fic2Im3 from "@images/Ficition/im6.webp";
import fic2Im4 from "@images/Ficition/im7.jpeg";
import fic2Im5 from "@images/Ficition/im8.jpeg";
import fic2Im6 from "@images/Ficition/im9.jpeg";
import fic3Im1 from "@images/Ficition/im10.jpeg";
import fic3Im2 from "@images/Ficition/im11.jpeg";
import fic3Im3 from "@images/Ficition/im12.jpeg";
import fic3Im4 from "@images/Ficition/im13.jpeg";
import fic3Im5 from "@images/Ficition/im14.jpeg";
import fic4Im1 from "@images/Ficition/im15.jpeg";
import fic5Im1 from "@images/Ficition/im16.jpeg";
import fic5Im2 from "@images/Ficition/im17.jpeg";
import fic5Im3 from "@images/Ficition/im18.jpeg";
import fic5Im4 from "@images/Ficition/im19.jpeg";
import fic5Im5 from "@images/Ficition/im20.jpeg";
import fic6Im1 from "@images/Ficition/im21.jpeg";
import fic6Im2 from "@images/Ficition/im22.webp";
import fic7Im1 from "@images/Ficition/im23.jpeg";
import fic8Im1 from "@images/Ficition/im24.jpeg";
import fic9Im1 from "@images/Ficition/im25.jpeg";
import fic10Im1 from "@images/Ficition/im26.jpeg";
import fic11Im1 from "@images/Ficition/im27.jpeg";
// scientific animation images imports
import sci1Im1 from "@images/SciAnim/im1.webp";
import sci2Im1 from "@images/SciAnim/im2.webp";
import sci3Im1 from "@images/SciAnim/im3.webp";
import sci4Im1 from "@images/SciAnim/im4.jpeg";
import sci5Im1 from "@images/SciAnim/im5.jpeg";
import sci6Im1 from "@images/SciAnim/im6.jpeg";
import sci7Im1 from "@images/SciAnim/im7.jpeg";
import sci8Im1 from "@images/SciAnim/im8.jpeg";
import sci9Im1 from "@images/SciAnim/im9.jpeg";
import sci10Im1 from "@images/SciAnim/im10.jpeg";
import sci11Im1 from "@images/SciAnim/im11.jpeg";
import sci12Im1 from "@images/SciAnim/im12.jpeg";
import sci13Im1 from "@images/SciAnim/im13.jpeg";
import sci14Im1 from "@images/SciAnim/im14.jpeg";
import sci15Im1 from "@images/SciAnim/im15.jpeg";
import sci16Im1 from "@images/SciAnim/im16.jpeg";
import sci17Im1 from "@images/SciAnim/im17.jpeg";
import sci18Im1 from "@images/SciAnim/im18.jpeg";
import sci19Im1 from "@images/SciAnim/im19.jpeg";
import sci20Im1 from "@images/SciAnim/im20.jpeg";
import sci21Im1 from "@images/SciAnim/im21.jpeg";
import sci22Im1 from "@images/SciAnim/im22.jpeg";
import sci23Im1 from "@images/SciAnim/im23.jpeg";
import sci24Im1 from "@images/SciAnim/im24.jpeg";
import sci25Im1 from "@images/SciAnim/im25.jpeg";
//character animation images import
import ca1img from "@images/characterAnimation/01_HeavyMental.webp";
import ca2img from "@images/characterAnimation/02_Familiale.webp";
import ca3img from "@images/characterAnimation/03_uber_mut.webp";
import ca4img from "@images/characterAnimation/04_FREUD.webp";
import ca5img from "@images/characterAnimation/05_ULULA.webp";
import ca6img from "@images/characterAnimation/06_ProvinzialsInsurance.webp";
import ca7img from "@images/characterAnimation/07_Müllerland.webp";
import ca8img from "@images/characterAnimation/08_11mm.webp";
import ca9img from "@images/characterAnimation/09_WATCHINGtheBall.webp";
import ca10img from "@images/characterAnimation/10_DBS.webp";
import ca11img from "@images/characterAnimation/11_RECHTHABER.webp";
import ca12img from "@images/characterAnimation/12_ubermacht.webp";
import ca13img from "@images/characterAnimation/13_VORURTEILE.webp";
import ca14img from "@images/characterAnimation/14_SPARKASSE.webp";
import ca15img from "@images/characterAnimation/15_SPD Zukunft.webp";
import ca16img from "@images/characterAnimation/16_Europawahl.webp";
import ca17img from "@images/characterAnimation/17_Karpfen.webp";
import ca18img from "@images/characterAnimation/18_LebenPUR.webp";
import ca19img from "@images/characterAnimation/19_EENLAND.webp";
import ca20img from "@images/characterAnimation/20_blutkörperchen.webp";
import ca21img from "@images/characterAnimation/21_TUNNELLIFE.webp";
import ca22img from "@images/characterAnimation/22_CHINA.webp";
//documentaries images import
import doc00img from "@images/documentaries/00_MALAHANOJ.webp";
import doc01img from "@images/documentaries/01_tonenntaucher.webp";
import doc02img from "@images/documentaries/02_Google-Cloud.webp";
import doc03img from "@images/documentaries/03_HeyWelt.webp";
import doc04img from "@images/documentaries/04_LITTLEHANOI.webp";
import doc05img from "@images/documentaries/05_BUGSpremiere.webp";
import doc06img from "@images/documentaries/06_ArbeitMöglichMachen.webp";
import doc07img from "@images/documentaries/07_BREMEN_Inklusion.webp";
import doc08img from "@images/documentaries/08_Fussballeinfach.webp";
import doc09img from "@images/documentaries/09_Fussballverbindet.webp";
import doc10img from "@images/documentaries/10_BÄÄM.webp";
import doc11img from "@images/documentaries/11_DEAFSLAM.webp";
import doc12img from "@images/documentaries/12_CHILDBOXERS.webp";
import doc13img from "@images/documentaries/13_uranium.webp";
import doc14img from "@images/documentaries/14_cinemateka.webp";
import doc15img from "@images/documentaries/15_IRAN.webp";
import doc16img from "@images/documentaries/16_NEUGIERIG.webp";
import doc17img from "@images/documentaries/17_SINEMA_pasik.webp";
import doc18img from "@images/documentaries/18_UberallDabei.webp";
import doc19img from "@images/documentaries/19_Susedia.webp";
import doc20img from "@images/documentaries/20_wanderlust.webp";
//innovation solutins images imports
import is1img from "@images/innovativeSolutions/LOVEBOTS_AI_1.jpg";
import is2img from "@images/innovativeSolutions/LOVEBOTS_AI_2.jpg";
import is3img from "@images/innovativeSolutions/LOVEBOTS_AI_3.jpg";
//import video component
import renderVideo from "@components/work/embeded_video";

const Works = () => {
  //   var works_type_select = "Fiction Films";

  const [worksTypeSelect, setWorksTypeSelect] = useState("");
  const selectedRef=useRef(null)
  //   const [works_type_selectnext, setworks_type_selectnext] = useState("");
  const list_of_works = [
    {
      type: "Fiction Films",
      title: "LOVEBOTS",
      more_images: [fic1Im2, fic1Im3],
      type_info:
        "Feature film in development, 100min",
      more_info: "Development supported by BKM (German Ferderal Ministy of Culture) and Medienboard. Participation (a.o.) Music and Cinema Marseilles 2023 (market), eQuinoxe Europe '23",
      image: fic1Im1,
    },
    {
      type: "Fiction Films",
      title: "SUMMER REBELS ",
      more_images: [fic2Im2, fic2Im3, fic2Im4, fic2Im5, fic2Im6],
      type_info: "Feature film, 92min, German-Slovak coproduction",
      more_info:
        "Summer Rebels was shortlisted for German Film Award 2021 and won the GERMAN FILM CRITICS’ AWARD for Best Children’s Film in the same year. Running in competition at numerous national and international festivals it received various awards. Licensed by Netflix in several European countries the film also saw a theatrical release in Germany, Slovakia, Czech Republic and Austria. More information:",
      image: fic2Im1,
      vid_url: ["https://vimeo.com/436425181"],
    },
    {
      type: "Fiction Films",
      title: "ARIZONA JOE ",
      more_images: [fic3Im2, fic3Im3, fic3Im4, fic3Im5],
      type_info: "Series (6x45min) in development",
      more_info:
        "A wild Soviet Era roller coaster by Matīss Kaža in co-production with TRICKSTER Pictures (LTV) , FILMKOLEKTIV (CZ) & WHAT IF Films (SK)",
      image: fic3Im1,
    },
    {
      type: "Fiction Films",
      title: "MY WORLD UPSIDE DOWN ",
      more_images: [],
      type_info: "Feature film in development, 90min",
      more_info:
        "Cco-production with WHAT IF Films (SK), director: Daniel Rihak. Winner of Havc Development Award '23, POPup Award '23 and Orka Award´22.Development  supported by Slovak Film Fund.",
      image: fic4Im1,
      vid_url:["https://vimeo.com/887248315"],
    },
    {
      type: "Fiction Films",
      title: "POLYCULE",
      more_images: [fic5Im2, fic5Im3, fic5Im4, fic5Im5],
      type_info: "Mini-series, dramedy (9x20min) in development",
      more_info:
        "Authors: Edda Lina Janz und Sophie de Frenne, with concept for all episodes finished.",
      image: fic5Im1,
    },
    {
      type: "Fiction Films",
      title: "BUDDIES 4EVAH",
      more_images: [fic6Im2],
      type_info: "Comedy series in rewrite",
      more_info: "Authors: Sülke Schulz & Martina Sakova",
      image: fic6Im1,
    },
    {
      type: "Fiction Films",
      title: "NEPTUN",
      more_images: [],
      type_info: "Middle-length film, 38min",
      more_info:
        "In a mix of mockumentary and re-enactment Adela Babanova traces a failed attempt at revealing state sponsored disinformation. Coproduction with Czech television, Bratri s.r.o. and MagicLab.",
      image: fic7Im1,
      vid_url:["https://vimeo.com/290691320"],
    },
    {
      type: "Fiction Films",
      title: "SCHWIMMER",
      more_images: [],
      type_info: "Short film, 29min",
      more_info:
        "Sound design for Marcin Malaszczak highly aestheticized film whose narrative is based on the network of the Berlin city map.",
      image: fic8Im1,
    },
    {
      type: "Fiction Films",
      title: "BLACK SHEEP",
      more_images: [],
      type_info: "Feature Film, 92min, German-Swiss coproduction",
      more_info:
        "SFX for Berlin Underground cult hit featuring Tom Schilling and Robert Stadlober. Coproduction: Stäfa Switzerland & KoboiFilm Germany",
      image: fic9Im1,
    },
    {
      type: "Fiction Films",
      title: "CAT EFFECT",
      more_images: [],
      type_info: "Middle-length film, 40min",
      more_info:
        "Sound design for the experimental film 'Cat Effect' by Melissa Dullius and Gustavo Jahn",
      image: fic10Im1,
      vid_url:["https://vimeo.com/28453590"],
    },
    {
      type: "Fiction Films",
      title: "TRIANGULUM",
      more_images: [],
      type_info: "Middle-length film, 22min",
      more_info:
        "A wild Soviet Era roller coaster by Matīss Kaža in co-production with TRICKSTER Pictures (LTV) , FILMKOLEKTIV (CZ) & WHAT IF Films (SK)",
      image: fic11Im1,
      vid_url:["https://vimeo.com/14395575"],
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "HISTORY OF SURVIVAL",
      type_info: "Animation for science show TERRA X, broadcaster ZDF / arte",
      more_info:
        "Client: UFA documentary",
      image: sci1Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "POLAR CIRCLE",
      type_info: "Animation for science show TERRA X, broadcaster ZDF",
      more_info: "",
      image: sci2Im1,
      vid_url:["https://vimeo.com/149449460", "https://vimeo.com/149448131"],
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "BUTTENDIEK",
      type_info:
        "Animation and sound design for an image film for wind park operator WPD",
      more_info: "",
      image: sci3Im1,
      vid_url:["https://vimeo.com/146884277"],
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "STARS ABOVE JENA (1/2)",
      type_info: "Fulldome film for the Zeiss Planetarium Jena",
      more_info:
        "The 360° film was designed with today’s viewing habits in mind. Using spectacular camera movements, a modern cinematic narrative and a contemporary language style, history can be experienced in a new way.",
      image: sci4Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "MYSTERIOUS PHENOMAS (1/2)",
      type_info:
        "Animation for knowledge magazine TERRA X on German public TV channel ZDF",
      more_info: "",
      image: sci5Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "MYSTERIOUS PHENOMAS (2/2)",
      type_info: "Animation for science program TERRA X, ZDF",
      more_info:
        "Second series of a shop about seemingly unexplained phenomena",
      image: sci6Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "MEASURING THE EARTH (1/2)",
      type_info: "3D animations for renowned science show TERRA X, ZDF",
      more_info: "From the Nebra sky disk to GPS | with Harald Lesch | 43 min",
      image: sci7Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "TABU – MYSTERIOUS PLACES",
      type_info: "3D animations for science magazine TERRA X, ZDF",
      more_info:
        "The new episode of TABU (43min) delves into the unknown from enigmatic Area 51 in Nevada through Greenland to a lost treasure in the Caribbean.",
      image: sci8Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "STARS ABOVE JENA (2/2)",
      type_info: "Fulldome film for the Zeiss Planetarium Jena",
      more_info:
        "By employing spectacular camera movements, cinematic narrative and an engaging language this 360° film caters to modern viewing habits to experience history.",
      image: sci9Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "MEASURING THE EARTH (2/2)",
      type_info:
        "3D animations for science magazine TERRA X, broadcaster ZDF (Germany)",
      more_info: "From Columbus to outer space | with Harald Lesch | 43 min",
      image: sci10Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "NAPOLEON IN JENA",
      type_info: "Fulldome film",
      more_info:
        "A showcase of history under the stars, the movie takes audiences on a journey through the Napoleonic period in Central Germany and was screened on Planetarium Jena's mobile fulldome.",
      image: sci11Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "NATURA JENENSIS",
      type_info: "Fulldome film for VR venue",
      more_info:
        "In this project, we created the fulldome footage and converted it into a 360 degree format for use in VR.",
      image: sci12Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "PATAGONIA",
      type_info: "Animation for knowledge program TERRA X on ZDF (Germany)",
      more_info: "",
      image: sci13Im1,
      vid_url:["https://vimeo.com/149447369"],
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "POSTBASE",
      type_info: "Image film for PostBase products",
      more_info: "Agency: MEDIA BRICKS, Germany",
      image: sci14Im1,
      vid_url:["https://vimeo.com/146901286"],
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "NEW ZEALAND",
      type_info: "Animation for science show TERRA X, broadcaster ZDF",
      more_info: "",
      image: sci15Im1,
      vid_url:["https://vimeo.com/149445842"],
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "SCHINDLER",
      type_info: "VFX for image film for elevator manufacturer Schindler",
      more_info: "Agency: MEDIA BRICKS",
      image: sci16Im1,
      vid_url:["https://vimeo.com/149212336"],
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "DUHOK 2015",
      type_info:
        "Theatrical trailer for International Film Festival Duhok, Kurdistan Iraq 2015",
      more_info: "",
      image: sci17Im1,
      vid_url:["https://vimeo.com/146570504"],
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "BIATHLON WORLD CUP",
      type_info:
        "6×1“ visualisations of the Biathlon World Cup race track, broadcaster ARD Germany",
      more_info: "",
      image: sci18Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "THE TUBE",
      type_info: 'Image film for lift system "The Tube"',
      more_info: "",
      image: sci19Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "ENABLE2START",
      type_info: "Image film for Financial Times Germany",
      more_info: "Agency: Flemming Pfuhl / Play Media",
      image: sci20Im1,
      vid_url:["https://vimeo.com/12915636"],
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "UBITRICITY",
      type_info: "Image film for Ubitricity",
      more_info: "",
      image: sci21Im1,
      vid_url:["https://vimeo.com/55765758"],
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "FROZEN WORLD",
      type_info:
        "Motion design and animation for science program TERRA X / ZDF Germany",
      more_info: "",
      image: sci22Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "THE SIBERIAN ADVENTURE",
      type_info:
        "Animations for science program Terra X on German public channel ZDF",
      more_info: "",
      image: sci23Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "MULTIPEN",
      type_info: "Animation for TV show Galileo, PRO7, Germany",
      more_info: "",
      image: sci24Im1,
    },
    {
      type: "Scientific Animation",
      more_images: [],
      title: "TORNADO GALILEO SPEZIAL",
      type_info:
        "Animations and VFX for a special edition of science show Galileo, Pro7",
      more_info: "",
      image: sci25Im1,
    },
    {
      type: "Character Animation",
      more_images: [],
      title: "HEAVY MENTAL",
      type_info: "Animated short film, German-Slovak coproduction",
      more_info:
        "Imagine getting kicked out of school and your best friend just became possessed by the devil. Can it get any worse?! Yes, it can...",
      image: ca1img,
      vid_url:["https://vimeo.com/36068260"],
    },
  
    {
      type: "Character Animation",
      more_images: [],
      title:"FAMILIALE",
      type_info: "Theatrical trailer for a film contest propagating inclusion",
      more_info: "Client: Lebenshilfe",
      image: ca2img,
      vid_url:["https://vimeo.com/131183191"],
    },
    {
      type: "Character Animation",
      more_images: [],
      title:"ÜBER MUT",
      type_info: "Theatrical trailer for film festival Über Mut",
      more_info: "Client: Aktion Mensch",
      image: ca3img,
      vid_url:["https://vimeo.com/16027418"],
    },
    {
      type: "Character Animation",
      more_images: [],
      title:"EROS AND THANATOS",
      type_info: "Animations for theater play Eros and Thanatos",
      more_info: "Client: Theater Figuro",
      image: ca4img,
    },
    {
      type: "Character Animation",
      more_images: [],
      title:"ULULA",
      type_info: "Explanatory film for the NY based startup",
      more_info: "",
      image: ca5img,
      vid_url:["https://vimeo.com/86840223"],
    },
    {
      type: "Character Animation",
      more_images: [],
      title:"PROVINZIAL INSURANCE",
      type_info: "Image film for Provinzial insurances",
      more_info: "",
      image: ca6img,
      vid_url:["https://vimeo.com/146895359"],
    },
    {
      type: "Character Animation",
      more_images: [],
      title:"MÜLLERLAND",
      type_info: "Character animations for image films",
      more_info: "Client: Müllerland",
      image: ca7img,
      vid_url:["https://vimeo.com/55766380","https://vimeo.com/55766379"],
    },
    {
      type: "Character Animation",
      more_images: [],
      title:"11mm",
      type_info: "Theatrical trailer for film festival 11mm",
      more_info: "The festival was held at the same time in Berlin and Charkiw / Kiew",
      image: ca8img,
      vid_url:["https://vimeo.com/37512150"],
    },
    {
      type: "Character Animation",
      more_images: [],
      title:"WATCHING THE BALL",
      type_info: "Animated short film",
      more_info: `Different people watching football at different places on earth and 
in space. While the game connects them all, every one of them has their problems to cope with. Premiered at DOK Leipzig 2014.`,
      image: ca9img,
      vid_url:["https://vimeo.com/107983822"],
    },
    {
      type: "Character Animation",
      more_images: [],
      title:"NATIONAL PARALYMPIC COMMITTEE GERMANY",
      type_info: "Animation films for National Paralympic Committee Germany",
      more_info: "Character design: Pablo Ientile",
      image: ca10img,
      vid_url:["https://vimeo.com/776523585/fc5e9db313"],
    },
    {
      type: "Character Animation",
      more_images: [],
      title:"RECHTHABER",
      type_info: "Graphic conception and animated bumpers for the series Rechthaber",
      more_info: "Screened on the Galileo-show on Pro7 , Germany",
      image: ca11img,
      vid_url:["https://vimeo.com/146889758"],
    },
    {
      type: "Character Animation",
      more_images: [],
      title:"ÜBER MACHT",
      type_info: `Theatrical trailer for film festival “Über Macht”`,
      more_info: "Client: Aktion Mensch",
      image: ca12img,
      vid_url:["https://vimeo.com/19903699"],
    },
    {
      type: "Character Animation",
      more_images: [],
      title:"PREJUDICE",
      type_info: "Animations for TV show Galileo about prejudice, PRO7, Germany",
      more_info: "",
      image: ca13img,
    },
    {
      type: "Character Animation",
      more_images: [],
      title:"APPRENTICESHIP IN SPARKASSE",
      type_info: "Animation for an image film propagating apprenticeship at Sparkasse",
      more_info: "Client: Sparkasse",
      image: ca14img,
    },
    {
      type: "Character Animation",
      more_images: [],
      title:"SPD FUTURE",
      type_info: "Animations for image films for Social Democratic Party",
      more_info: "",
      image: ca15img,
      vid_url:["https://vimeo.com/33340426","https://vimeo.com/33272619"],
    },
    {
      type: "Character Animation",
      more_images: [],
      title:"EUROPEAN ELECTION 2009",
      type_info: "Teaser for European elections 2009",
      more_info: "Client:  Young Socialists (Jusos)",
      image: ca16img,
      vid_url:["https://vimeo.com/4643842"],
    },
    {
      type: "Character Animation",
      more_images: [],
      title:"CARP FAMILY",
      type_info: "Animation for science show Galileo, broadcaster PRO7",
      more_info: "",
      image: ca17img,
    },
    {
      type: "Character Animation",
      more_images: [],
      title:"LEBEN PUR",
      type_info: "Image films",
      more_info: "Client: Foundation Leben Pur",
      image: ca18img,
    },
    {
      type: "Character Animation",
      more_images: [],
      title:"EEN LAND TWEE MEERE",
      type_info: "Image film for Schleswig-Holstein",
      more_info: "",
      image: ca19img,
    },
    {
      type: "Character Animation",
      more_images: [],
      title:"BLOOD CELLS",
      type_info: "Animated short film",
      more_info: "",
      image: ca20img,
    },
    {
      type: "Character Animation",
      more_images: [],
      title:"TUNNELLIFE",
      type_info: "Animated short film",
      more_info: "",
      image: ca21img,
    },
    {
      type: "Character Animation",
      more_images: [],
      title:"CHINA",
      type_info: "Animations for TV show Galileo, broadcaster PRO7, Germany",
      more_info: "",
      image: ca22img,
    },
   
    {
      type: "Documentaries",
      more_images: [],
      title:"MALA HANOJ",
      type_info: "Documentary film, 78min, in Co-production with HBO Max and Filmframe (SK)",
      more_info: "Over the course of several years, the long-term documentary follows the fate of Vietnamese traders on the German-Czech border. Funded by Slovak audionvisual fund.",
      image: doc00img,
      vid_url:["https://vimeo.com/50022913", "https://vimeo.com/829458213"],
    },
    {
      type: "Documentaries",
      more_images: [],
      title:"DUMPSTER DIVERS",
      type_info: "Documentary film, 46min, in co-production with Strahlendes Klima",
      more_info: "Ecology Film Prize , Science Film Festival, Asia'18/ world premiere: Barents Ecology Film Festival in Petrosavods",
      image: doc01img,
      vid_url:["https://vimeo.com/37804089"],
    },
    {
      type: "Documentaries",
      more_images: [],
      title:"GOOGLE CLOUD HACKATHON",
      type_info: "Documentation, diverse short formats for web and social media",
      more_info: "Agency InsGlück",
      image: doc02img,
      vid_url:["https://vimeo.com/"],
    },
    {
      type: "Documentaries",
      more_images: [],
      title:"HEY WORLD",
      type_info: "Music video celebrating 60th anniversary of non-profit association Lebenshilfe",
      more_info: "",
      image: doc03img,
      vid_url:["https://youtu.be/CMWtY-Gs-ek"],
    },
    {
      type: "Documentaries",
      more_images: [],
      title:"LITTLE HANOI",
      type_info: "Karaoke style for documentary Mala Hanoj",
      more_info: "",
      image: doc04img,
      vid_url:["https://vimeo.com/82545092","https://vimeo.com/55443616","https://vimeo.com/55099055"],
    },
    {
      type: "Documentaries",
      more_images: [],
      title:"EROS AND THANATOS",
      type_info: "Animations for the puppet theater, production of Theater Figuro",
      more_info: "",
      image: doc05img,
      vid_url:["https://vimeo.com/782679328"],
    },
    {
      type: "Documentaries",
      more_images: [],
      title:"MAKE WORK POSSIBLE",
      type_info: "Documentary film series for Aktion Mensch",
      more_info: "",
      image: doc06img,
      vid_url:["https://vimeo.com/146044037","https://vimeo.com/149199304","https://vimeo.com/146954739"],
    },
    {
      type: "Documentaries",
      more_images: [],
      title:"INCLUSION @ WERDER BREMEN",
      type_info: "Documentary film about inclusion match day in Bremen",
      more_info: "Client: Aktion Mensch",
      image: doc07img,
      vid_url:["https://vimeo.com/149395369"],
    },
    {
      type: "Documentaries",
      more_images: [],
      title: "SIMPLY FOOTBALL",
      type_info: "Trailer",
      more_info: "Client: Aktion Mensch",
      image: doc08img,
      vid_url:["https://vimeo.com/97977669"],
    },
    {
      type: "Documentaries",
      more_images: [],
      title:"FOOTBALL CONNECTS",
      type_info: "Image film",
      more_info: "Client: Aktion Mensch",
      image: doc09img,
      vid_url:["https://youtu.be/RVzaIEgecwI"],
    },
    {
      type: "Documentaries",
      more_images: [],
      title:"BÄÄM",
      type_info: "Web documentary series about sign language festival Deaf slam Bääm.",
      more_info: "Client: Aktion Mensch",
      image: doc10img,
      vid_url:["https://youtu.be/K8PWhI1fmIE","https://youtu.be/3G7BYmRItzw","https://youtu.be/soQgIFbUNPA", "https://youtu.be/dE55EKgQPnc"]
    },
    {
      type: "Documentaries",
      more_images: [],
      title: "DEAF SALAM BÄÄM",
      type_info: "Trailer for sign language Deaf Slam Bääm",
      more_info: "Client: Aktion Mensch",
      image: doc11img,
      vid_url:["https://youtu.be/Oazzu6LcQbM"],
    },
    {
      type: "Documentaries",
      more_images: [],
      title:"BUKOM FIGHTERS",
      type_info: "Documentary film project ",
      more_info: "co-production with Ahenfie Multimedia/Accra. Funded by Jan Vrijman Fund IDFA un Sundance Institute",
      image: doc12img,
      vid_url:["https://vimeo.com/14385566"],
    },
    {
      type: "Documentaries",
      more_images: [],
      title:"URANIUM, IS IT A COUNTRY?",
      type_info: "Edit of documentary film, 53min",
      more_info: `Tracking the origins of nuclear power in Australia, the place of the worlds biggest nuclear fuel reserves.`,
      image: doc13img,
      vid_url:["https://youtu.be/L4u5rbcx1D0", "https://vimeo.com/37244612"],
    },
    {
      type: "Documentaries",
      more_images: [],
      title:"CINEMATEKA KURDI",
      type_info: `Postproduction of a monthly show about Kurdish cinema, broadcaster ROJ TV, Denkmark`,
      more_info: "",
      image: doc14img,

    },
    {
      type: "Documentaries",
      more_images: [],
      title:"EVIL EMPIRE",
      type_info:`Trailer for the documentary "Empire of Evil" by Mohammad Farokhmanesh`,
      more_info: "",
      image: doc15img,
      vid_url:["https://www.dailymotion.com/video/x7wzlvi"],
    },
    {
      type: "Documentaries",
      more_images: [],
      title:"TEASING",
      type_info: `Teaser for the 50th anniversary of non-profit association Aktion Mensch`,
      more_info: "",
      image: doc16img,
      vid_url:["https://vimeo.com/91536887"],
    },
    {
      type: "Documentaries",
      more_images: [],
      title:"SINEMA",
      type_info: `Postproduction of a monthly show about world cinema, broadcaster KURD YEK, France`,
      more_info: "",
      image: doc17img,
    },
    {
      type: "Documentaries",
      more_images: [],
      title:"EVERYWHERE WITH YOU",
      type_info: "Trailer for documentary film festival Überall Dabei",
      more_info: "Client: Aktion Mensch",
      image: doc18img,
      vid_url:["https://vimeo.com/55866304"],
    },
    {
      type: "Documentaries",
      more_images: [],
      title:"NEIGHBOURS",
      type_info: "Documentary film for series COLNICE",
      more_info: "Co-produktion: Czech Television, Slovak Television & Furiafilms",
      image: doc19img,

    },
    {
      type: "Documentaries",
      more_images: [],
      title:"WANDERLUST",
      type_info: "Web documentary series about the Wanderlust theater project for the Federal Cultural Foundatio",
      more_info: "",
      image: doc20img,
      vid_url:["https://vimeo.com/50678630"]
    },
    {
      type: "Innovative Solutions",
      more_images: [],
      title: "MEASURING THE EARTH (2/2)",
      type_info:
        "3D animations for science magazine TERRA X, broadcaster ZDF (Germany)",
      more_info: "From Columbus to outer space | with Harald Lesch | 43 min",
      image: is1img,
    },
   
    {
      type: "Innovative Solutions",
      more_images: [],
      title:"LOVEBOTS_AI",
      type_info:"Interactive reading advisor and partner ",
      more_info:"",
      image: is2img,
    },
    {
      type: "Innovative Solutions",
      more_images: [],
      title:"LOVEBOTS_AI",
      type_info:"Interactive reading advisor and partner ",
      more_info:"",
      image: is3img,
    },
  ];
  const handle_works_type_select_change = (type) => {
    setWorksTypeSelect(type);
    // setworks_type_selectnext("");

    // if (works_type_select != "" && works_type_selectnext != "") {
    //   if (works_type_selectnext == works_type_select) {
    //     setworks_type_select("");
    //     setworks_type_selectnext("");
    //   } else if (works_type_selectnext != works_type_select) {
    //     setworks_type_select(works_type_selectnext);
    //     setworks_type_selectnext(type);
    //   }
    // }
    // console.log(works_type_select);
    // console.log(works_type_selectnext);
  };

  //   document.addEventListener("click", function (event) {
  //     // Check if the click was outside the element

  //     document.querySelectorAll(".work").forEach((e) => {
  //       if (!e.contains(event.target)) {
  //         alert("Clicked outside the element!");
  //       }
  //     });
  //   });

  const videoRef = useRef(null);


  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      // Ensure video plays in a loop
      videoElement.addEventListener(
        "ended",
        function () {
          this.currentTime = 0;
          this.play();
        },
        false
      );

      // Play the video (with autoplay considerations)
      videoElement.muted = true; // Mute video to comply with autoplay policies
      videoElement.play().catch((error) => {
        console.error("Error attempting to play video:", error);
      });
    }
    
    // Cleanup event listener on component unmount
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", function () {
          this.currentTime = 0;
          this.play();
        });
      }
    };
  }, []);

  useEffect(()=>{
    if(worksTypeSelect&&selectedRef.current){
      selectedRef.current.scrollIntoView({behaviour:'smooth', block:'start'})
      selectedRef.current.focus();
    }
  }, [worksTypeSelect])
  return (
    <div className="works" >
      {/* <video src={work_bg} className="work_bg" id="backGbW" autoPlay></video> */}
      {/* <video src={work_bg} id="backGbW" autoplay loop muted playsinline></video> */}
      {/* <video
        id="backGbW"
        ref={videoRef}
        src={work_bg}
        autoPlay
        loop
        muted
        playsInline
      /> */}
      <Navbar />
      <h1>Works</h1>
      <div className="works_nav" >
        <div
          className="work"
          onClick={() => {
            handle_works_type_select_change("Fiction Films");
          }}
          >
          <div className="img" ref={selectedRef} >
            <img src={fic_work} alt=""  />
          </div>
          <div
            className={`text ${
              worksTypeSelect === "Fiction Films" ? "active" : ""
            }`}
            >
            <p>Fiction Films</p>
          </div>
        </div>
        <div
          className="work"
          onClick={() =>
            handle_works_type_select_change("Scientific Animation")
          }
          >
          <div className="img" ref={selectedRef} >
            <img src={sci_img} alt="" />
          </div>
          <div
            
            className={`text ${
              worksTypeSelect === "Scientific Animation" ? "active" : ""
            }`}
            >
            <p>Scientific Animation</p>
          </div>
        </div>
        <div
          className="work"
          onClick={() => handle_works_type_select_change("Character Animation")}
          >
          <div className="img" ref={selectedRef}>
            <img src={char_anim} alt="" />
          </div>
          <div
            
            className={`text ${
              worksTypeSelect === "Character Animation" ? "active" : ""
            }`}
            >
            <p>Character Animation</p>
          </div>
        </div>
        <div
          className="work"
          onClick={() => handle_works_type_select_change("Documentaries")}
          >
          <div className="img" ref={selectedRef} >
            <img src={docum_im} alt=""  />
          </div>
          <div
            
            className={`text ${
              worksTypeSelect === "Documentaries" ? "active" : ""
            }`}
            >
            <p>Documentaries</p>
          </div>
        </div>
        <div
          className="work"
          onClick={() =>
            handle_works_type_select_change("Innovative Solutions")
          }
          >
          <div className="img" ref={selectedRef}>
            <img src={inov_img} alt=""  />
          </div>
          <div
            className={`text ${
              worksTypeSelect === "Innovative Solutions" ? "active" : ""
            }`}
            >
            <p>Innovative Solutions</p>
          </div>
        </div>
      </div>

      {worksTypeSelect !== "" && (
        <ShowWorks
          list_of_works={list_of_works}
          works_type_select={worksTypeSelect}
          setworks_type_select={setWorksTypeSelect}
        />
      )}

      {worksTypeSelect === "" && <WorksInfo />}

      <Footer />
    </div>
  );
};

const WorksInfo = () => {
  const navigate = useNavigate();
  return (
    <div className="info" >
      <div className="text" >
        <p>
          We specialise in three film areas. As each idea is unique and requires
          an appropriate form, we often combine tools and methods of all three
          areas to achieve the best result. Computer animation and VFX help to
          visualise complex processes, abstract issues or communicate products
          in an attractive way. Character animation focuses on telling a story,
          often humorous, and on the identification with the animated
          characters. In documentary and fiction film, our ambition is to tell
          the story of protagonists' lives and views in an authentic and
          socio-critical way, with a strong emotional impact.
        </p>
      </div>

      <div className="logos" >
        <img src={logos} alt="" />
      </div>
      <BackButton className='back_btn' onClick={() => navigate(-1)} />
    </div>
  );
};

const ShowWorks = ({
  list_of_works,
  works_type_select,
  setworks_type_select,
}) => {
  const [avId, setAvId] = useState(1 + Math.random());
  useEffect(() => {
    setAvId(1 + Math.random());
  }, [works_type_select]);


  // useEffect(() => {
  //   // document.addEventListener("DOMContentLoaded", function () {
  //   const buttons = document.querySelectorAll(".open_btn");
  //   console.log(buttons);

  //   buttons.forEach((button) => {
  //     button.addEventListener("click", () => {
  //       console.log("hi");

  //       const content = button.parentElement.parentElement;
  //       if (content.classList.contains("active")) {
  //         content.classList.remove("active");
  //         console.log(content.classList);
  //       } else {
  //         content.classList.add("active");
  //         console.log(content.classList);
  //       }
  //     });
  //   });

  //   // });
  // }, []);
  // useEffect(() => {
  //   // document.addEventListener("DOMContentLoaded", function () {
  //   const buttons1 = document.querySelectorAll(".open_btn_1");
  //   console.log(buttons1);

  //   buttons1.forEach((button1) => {
  //     button1.addEventListener("click", () => {
  //       console.log("hi");

  //       const content = button1.parentElement.parentElement.parentElement;
  //       if (content.classList.contains("active")) {
  //         content.classList.remove("active");
  //         console.log(content.classList);
  //       } else {
  //         content.classList.add("active");
  //         console.log(content.classList);
  //       }
  //     });
  //   });

  // }, []);
  const handleRemoveClass = () => {
    const buttons = document.querySelectorAll(".open_btn_1");
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const content = button.closest(".eachwork");
        if (content?.classList.contains("active")) {
          content.classList.remove("active");
        }
      });
    });
  };
  
  useEffect(() => {
    const buttons = document.querySelectorAll(".open_btn");
  
    const handleClick = (button) => {
      const content = button.closest(".eachwork");
  
      const allContent = document.querySelectorAll(".content");
      allContent.forEach((item) => {
        if (item !== content) {
          item.classList.remove("active");
        }
      });
  
      content?.classList.toggle("active");
    };
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => handleClick(button));
    });
  
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", () => handleClick(button));
      });
    };
  }, []);
  return (
    <div className="show_works" >
      {list_of_works
        .filter((e) => e.type === works_type_select)
        .map((e, index) => (
          <div key={index} className="eachwork">
            <div className="image image_each_work" >
              <img src={e.image} alt={e.title} className="open_btn" />
              <svg
                className="open_btn"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 20 70"
                fill="none"
                >
                <circle
                  opacity="0.6"
                  cx="36"
                  cy="36"
                  r="30"
                  fill="#9747FF"
                  stroke="#9747FF"
                />
                <path
                  d="M36.7071 21.2929C36.3166 20.9024 35.6834 20.9024 35.2929 21.2929L28.9289 27.6569C28.5384 28.0474 28.5384 28.6805 28.9289 29.0711C29.3195 29.4616 29.9526 29.4616 30.3431 29.0711L36 23.4142L41.6569 29.0711C42.0474 29.4616 42.6805 29.4616 43.0711 29.0711C43.4616 28.6805 43.4616 28.0474 43.0711 27.6569L36.7071 21.2929ZM37 50V22H35V50H37Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="info video-info" >
            
              <div className="video-container" >
              {e.vid_url && e.vid_url.length> 0 &&renderVideo(e.vid_url)}
              </div>
              <div className="info" >
                <div className="images" >
                  {e.more_images?.length !== 0 && (
                    <svg
                      className="open_btn_1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 70"
                      fill="none"
                      onClick={handleRemoveClass} 
                      >
                      <circle
                        opacity="0.6"
                        cx="36"
                        cy="36"
                        r="26"
                        fill="#9747FF"
                        stroke="#9747FF"
                      />
                      <path
                        d="M36.7071 21.2929C36.3166 20.9024 35.6834 20.9024 35.2929 21.2929L28.9289 27.6569C28.5384 28.0474 28.5384 28.6805 28.9289 29.0711C29.3195 29.4616 29.9526 29.4616 30.3431 29.0711L36 23.4142L41.6569 29.0711C42.0474 29.4616 42.6805 29.4616 43.0711 29.0711C43.4616 28.6805 43.4616 28.0474 43.0711 27.6569L36.7071 21.2929ZM37 50V22H35V50H37Z"
                        fill="white"
                      />
                    </svg>
                  )}
                  {e.more_images.map((img, imgIndex) => (
                    <div key={imgIndex} className="image" >
                      <img src={img} alt={`Additional ${imgIndex}`} />
                    </div>
                  ))}
                </div>
                <div className="cont" >
                  <p>{e.title}</p>
                  <p>{e.type_info}</p>
                  <p>{e.more_info}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      <BackButton className="back_btn" onClick={() => setworks_type_select('')} />
    </div>
  );
}
export default Works;