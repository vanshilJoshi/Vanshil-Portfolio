import ExternalLink from "../../assets/images/project-external.png";
import GithubRepo from "../../assets/images/project-source.png";
import { projectsData } from "../../data/projectsData";

const Projects = () => {
  return (
    <section className="portfolio-grid">
      {projectsData.map((project) => (
        <section key={project.id} className="project">
          <img
            src={project.img}
            alt=""
            aria-hidden="true"
            className="project-img"
          />
          <section className="project-description">
            <p className="white-text p-tag">{project.description}</p>
            <section className="project-meta-stack">
              {project.stack.map((stackName, index) => (
                <p key={index}>{stackName}</p>
              ))}
            </section>
            <section className="project-links">
              <a href={project.src} target="_blank" rel="noreferrer">
                <img src={ExternalLink} alt="Link to project" />
              </a>
              <a href={project.source} target="_blank" rel="noreferrer">
                <img src={GithubRepo} alt="Link to Github" />
              </a>
            </section>
          </section>
        </section>
      ))}
    </section>
  );
};

export default Projects;
