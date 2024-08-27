import speedyFingers from "../assets/images/portfolio/speedyFingers.png";
import WeatherApp from "../assets/images/portfolio/weather-app.jpg";
import RestCountries from "../assets/images/portfolio/RestCountries.jpeg";
import Recipe from "../assets/images/portfolio/Recipe Portal.jpg";

const projectsData = [
  {
    id: "rest-countries",
    img: RestCountries,
    name: "Rest Countires",
    stack: ["< RESTful API />", "< CSS />", "< Javascript />"],
    src: "https://vanshiljoshi.github.io/Country-Information-Website/",
    source: "https://github.com/vanshilJoshi/Country-Information-Website",
    description:
      "REST Countries is a project made with API which also has a color theme switcher feature. You can view the list of all countries and find a specific one via search or by filtering regions. By navigating to the individual country page, you are able to see more details about the country like native name and even border countries.",
  },
  {
    id: "recipe",
    img: Recipe,
    name: "RecipePortal",
    stack: ["< React.js />", "< API />", "< Bootstap />", "< CSS3 />", "< HTML5 />"],
    src: "https://bankist-bank.vercel.app/",
    source: "https://github.com/vanshilJoshi",
    description:
      "The Food Recipe Portal is a dynamic web application built using React.js that allows users to explore and discover a wide variety of food recipes from around the world. This application integrates seamlessly with TheMealDB API to provide detailed recipe information, including ingredients, preparation instructions, and images.",
  },
  {
    id: "speedyFingers",
    img: speedyFingers,
    name: "Speedy Fingers",
    stack: ["< HTML5 />", "< CSS />", "< Vanilla JS />"],
    src: "https://vanshiljoshi.github.io/speedyFingers/",
    source: "https://github.com/vanshilJoshi/speedyFingers",
    description:
      "Developed an interactive web application designed to measure and enhance typing speed and accuracy. The application features a user-friendly interface built with HTML, CSS, and JavaScript, ensuring responsiveness across various devices. It provides real-time feedback on typing performance, including words per minute (WPM) and accuracy percentage, allowing users to track their progress and improve their typing skills. The project showcases a clean and intuitive design, optimized for performance and accessibility, making it an effective tool for users of all ages to practice and improve their typing abilities.",
  },
  {
    id: "weatherapp",
    img: WeatherApp,
    name: "WeatherApp",
    stack: ["< HTML5 />", "< CSS />", "< Vanilla JS />", "< API />"],
    src: "https://vanshiljoshi.github.io/weatherApp/",
    source: "https://github.com/vanshilJoshi/weatherApp",
    description:
      "This web application provides real-time weather updates for any location worldwide. Built with HTML, CSS, and JavaScript, it integrates seamlessly with a weather API to fetch and display data such as temperature, humidity, wind speed, and precipitation forecasts. The app features a user-friendly interface and offers both location-based and manual search functionality, allowing users to get instant weather information. The design is fully responsive, ensuring an optimal viewing experience on all devices.",
  },
];

export { projectsData };
