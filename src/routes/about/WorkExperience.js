import { experienceData } from "../../data/experienceData";

const WorkExperience = () => {
  return (
    <section className="work-experience">
      <h2 className="title-font pink-text h2-tag">Experience</h2>
      {experienceData.map((info, index) => (
        <section key={index}>
          <h3 className="h3-tag">{info.jobtitle}</h3>
          <section className="section-2">
            <p>{info.companyname} - </p>
            <p>{info.worktype}</p>
          </section>
          <p>{info.duration}</p>
          <p>{info.location}</p>
          <ol className="responsibilities ul-tag">
            {info.responsibility.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ol>
        </section>
      ))}
    </section>
  );
};
export default WorkExperience;
