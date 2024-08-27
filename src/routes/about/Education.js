import { educationData } from "../../data/experienceData";

const Education = () => {
  return (
    <section className="education">
      <h2 className="title-font pink-text h2-tag">Education</h2>
      {educationData.map((info, index) => (
        <section key={index}>
          <h3>{info.name}</h3>
          <p>{info.status}</p>
          <p>{info.year}</p>
        </section>
      ))}
    </section>
  );
};

export default Education;
