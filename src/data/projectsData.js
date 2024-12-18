
import RestCountries from "./../assets/portfolioImages/restcountries.jpg";
import SpaceTourism from "./../assets/portfolioImages/spacetourism.jpg";
import Advice from "./../assets/portfolioImages/advice.jpg";
import Page from "./../assets/portfolioImages/intropage.jpg";
// import AWS from "./../assets/portfolioImages/s3.PNG";
import Todo from "./../assets/portfolioImages/todo.jpg"
import Vanlife from "./../assets/portfolioImages/vanlife.png"
import PortfolioOne from "./../assets/portfolioImages/p1.jpg";
import Headquarter from "./../assets/portfolioImages/h1.jpg";
import Terminal from "./../assets/portfolioImages/t2.jpg";
import ProtfolioTwo from "./../assets/portfolioImages/p2.jpg";
import Advertisement from "./../assets/portfolioImages/advertisement.jpg";

// in progress projects

import Servista from './../assets/portfolioImages/servista.png'
import landingPage from './../assets/portfolioImages/url.jpg'

const ProjectsData = [
  {
    id: "protfolio",
    img: PortfolioOne,
    name: "First Portfolio Design",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "",
    source: "https://github.com/silverhorn25/portfolio.git",
    description:
      "The project is a Multiple Page Application (MPA) designed as a portfolio website, featuring multiple landing pages and structured across three distinct routes. It is built using modern web technologies, including React and TypeScript for its component-based architecture and type safety. The application’s styling is implemented with Tailwind CSS, enabling rapid and responsive design customization.",
    enableDemo: false,
    enableSource: true,
  },
  {
    id: "headquarter",
    img: Headquarter,
    name: "Alliance POS Headquarter",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "",
    source: "",
    description:
      "As a full-stack developer, I played a key role in the development of the application, where I utilized Java Spring Boot for the backend to build a robust and scalable server-side architecture. On the front end, I worked extensively with React and TypeScript, ensuring a dynamic, user-friendly, and type-safe experience. To enhance the UI, I integrated Ant Design, leveraging its rich set of pre-built, responsive components to create a polished, modern interface. My contributions included both designing and implementing features across the full stack, ensuring seamless integration between the backend and frontend for optimal performance and usability.",
    enableDemo: false,
    enableSource: false,
  },
  // {
  //   id: "rest-countries",
  //   img: RestCountries,
  //   name: "REST Countires API",
  //   stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
  //   live: "https://rest-countries-api-rimshub.vercel.app/",
  //   source: "https://github.com/rimshub/rest-countries-api",
  //   description:
  //     "Responsive website which integrates with the REST Countries API to pull country data. You can view the list of all countries and find one via search or by filtering regions. Individual country page, enables you to see further details about the country like border countries. Mobile first workflow and Bootstrap v5 is used to make it responsive.",
  // },

  {
    id: "terminal",
    img: Terminal,
    name: "Alliance POS Terminal",
    stack: ["< React.js />", "< CSS3 />"],
    live: "",
    source: "",
    description:
      "I also contributed to the development of a desktop application built with Electron, where I focused on creating a cross-platform experience with a smooth user interface using Ant Design. For local database management, I integrated SQLite, ensuring efficient data storage and retrieval. Additionally, I implemented Node Thermal Printer to handle receipt printing, optimizing the printing process for thermal printers and ensuring seamless integration with the rest of the desktop application. ",
    enableDemo: false,
    enableSource: false,
  },
  {
    id: "portfolio-two",
    img: ProtfolioTwo,
    name: "Portfolio Reverse Design",
    stack: ["< AWS S3 /> " , "< JavaScript /> " , "< Express.js />"],
    live: "",
    source: "https://github.com/silverhorn25/portfolio-single-page",
    description:  
        "In this project, I took inspiration from an existing portfolio design and reverse-engineered it to suit my personal style and preferences. I implemented a dark mode feature to enhance user experience and accessibility. The portfolio is designed as a single-page application, using React for dynamic content rendering and Tailwind CSS for responsive and efficient styling. The result is a sleek, modern portfolio that showcases my skills and projects in a visually appealing and user-friendly way.",
    enableDemo: false,
    enableSource: true,
  },

  {
    id: "advertisement",
    img: Advertisement,
    name: "Advertisement Website",
    stack: ["< HTML5 />", "< CSS3 />", "< JavaScript />"],
    live: "",
    source: "https://github.com/silverhorn25/advertisement",
    description:
      "This project is an advertisement website focused on promoting cosmetic products. While the project is currently on hold, the site is being developed using React with TypeScript for dynamic functionality and Tailwind CSS for efficient, responsive styling. The goal of the website is to create an engaging, visually appealing platform that highlights the brand and its offerings. Once completed, it will feature user-friendly navigation, product showcases, and responsive design for an optimal viewing experience across devices.",
    enableDemo: false,
    enableSource: true,
  },


  // {
  //   id: "todo",
  //   img: Todo,
  //   name: "JavaScript Todo App",
  //   stack: ["< JavaScript />  ", "< Sass />"],
  //   live: "https://rimshub.github.io/JavaScript-Todo-App/",
  //   source: "https://github.com/rimshub/JavaScript-Todo-App",
  //   description:
  //     "Responsive JS todo app with color theme switcher. Enables users to add, delete, filter, and clear day-to-day tasks. It has user-friendly interface and navigation. I was able to practice my JavaScript and Sass skills in this project.",
  // },

  // {
  //   id: "dropdown-nav",
  //   img: Page,
  //   name: "Homepage with dropdown navigation / Figma to React",
  //   stack: ["< React.js />   ", "< CSS3 />"],
  //   live: "https://rimshub.github.io/figma-design-to-reactjs/",
  //   source: "https://github.com/rimshub/figma-design-to-reactjs",
  //   description:
  //     "This challenge from frontendmentor tested my skills to create dropdown navigation menus, a common pattern on larger sites. It also has some nice basic layout challenge. As a front-end developer, I was able to practice my React.js and CSS3 skills in this project.",
  // },

];

const InprogressProjectsData = [

  {
    id: "url-short",
    img: landingPage,
    name: "URL shortening API landing page",
    stack: ["< JavaScript />", "< NodeJS />"],
    live: "",
    source: "https://github.com/rimshub/URL-shortening-API-landing-page",
    description:
      "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge",
  },

];

export default { ProjectsData, InprogressProjectsData }