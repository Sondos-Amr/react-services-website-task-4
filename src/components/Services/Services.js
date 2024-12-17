import HeadSection from "./HeadingSection";
import ServicesItems from "./ServicesItems";
export default function Services() {
  return (
    <section className="container services">
      <div className="container-services">
        <HeadSection
          subHeading="Our Services"
          topHeading="Web & Mobile app design, bring your ideas to life"
          contentHeading="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in"
        />
        <ServicesItems />
      </div>
    </section>
  );
}
