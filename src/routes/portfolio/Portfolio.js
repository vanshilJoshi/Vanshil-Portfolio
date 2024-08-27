import Projects from "./Projects";
import Footer from "../../components/footer/Footer";
import PortfolioDescription from "./PortfolioDescription";
import ScrollButton from "../../components/ScrollButton";
import { useEffect } from "react";
import "./Portfolio.sass";
const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio | Vanshil-Joshi";
    window.scrollTo(0, 0);
  })
  return (
    <article className="portfolio-main">
      <PortfolioDescription />
      <Projects />
      <ScrollButton />
      <Footer />
    </article>
  );
};

export default Portfolio;
