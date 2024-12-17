
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

// in progress projects

import Servista from './../assets/portfolioImages/servista.png'
import landingPage from './../assets/portfolioImages/url.jpg'

const ProjectsData = [
  {
    id: "vanlife",
    img: PortfolioOne,
    name: "First Portfolio Design",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "",
    source: "https://github.com/silverhorn25/portfolio.git",
    description:
      "SPA (Single Page Application) to rent a van for a road trip with 10+ routes. I have built it with ReactJS, React Router 6, miragejs and CSS for styling. It has a responsive design and navigation.",
    enableDemo: false,
    enableSource: true,
  },
  {
    id: "fyp",
    img: Headquarter,
    name: "Alliance POS Headquarter",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "",
    source: "",
    description:
      "A cross-platform app that connects local service providers with customers. As a full stack developer, I contributed to the development of the app using Flutter, Node.js, Express.js, Next.js and MongoDB. I also worked on the design of the app using Figma. The mobile app is currently in the testing phase and will be launched soon. Web app's frontend is also completed.",
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
    id: "space-tourism",
    img: Terminal,
    name: "Alliance POS Terminal",
    stack: ["< React.js />", "< CSS3 />"],
    live: "",
    source: "",
    description:
      "Multi-page space tourism website provides relevent information for users. It has a responsive design and navigation. A large and complex project that required me to plan ahead and break down the work into smaller chunks. I used React.js to build the website and CSS3 for styling.",
    enableDemo: false,
    enableSource: false,
  },
  // {
  //   id: "cloud-storage",
  //   img: AWS,
  //   name: "Cloud Storage with AWS Simple Storage Service",
  //   stack: ["< AWS S3 /> " , "< JavaScript /> " , "< Express.js />"],
  //   live: "",
  //   source: "https://github.com/rimshub/cloud-storage-s3",
  //   description:  
  //       "This challenge from frontendmentor tested my skills to create dropdown navigation menus, a common pattern on larger sites. It also has some nice basic layout challenge",
  // },

  // {
  //   id: "advice-generator",
  //   img: Advice,
  //   name: "Advice Generator App",
  //   stack: ["< HTML5 />", "< CSS3 />", "< JavaScript />"],
  //   live: "https://rimshub.github.io/javascript-advice-generator/",
  //   source: "https://github.com/rimshub/javascript-advice-generator",
  //   description:
  //     "This advice generator app using the Advice Slip API. A small and fun app to practice JavaScript and mobile first workflow and CSS3. It has a responsive design and navigation.",
  // },


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