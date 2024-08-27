import Linkedin from "../../assets/images/socials/linkedin-pink.svg";
import Github from "../../assets/images/socials/github-pink.svg";
import Codepen from "../../assets/images/socials/instagram-pink.svg";
const NavigationSocials = () => {
  return (
    <section className="social-media">
      <a
        href="https://www.linkedin.com/in/vanshil-joshi-3a3423285"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="linkedin" />
      </a>
      <a
        href="https://github.com/vanshilJoshi"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="github" />
      </a>
      <a
        href="https://www.instagram.com/vanshil.07"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Codepen} alt="Instagram" />
      </a>
    </section>
  );
};

export default NavigationSocials;
