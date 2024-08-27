import { certificationData } from "../../data/experienceData";

const Certifications = () => {
  return (
    <section className="certification">
      <h2 className="title-font  pink-text h2-tag">Certifications</h2>
      {certificationData.map((info, index) => (
        <section key={index}>
          <h3 className="h3-tag">{info.name}</h3>
          <p>{info.source}</p>
          <p>{info.date}</p>
        </section>
      ))}
    </section>
  );
};

export default Certifications;
