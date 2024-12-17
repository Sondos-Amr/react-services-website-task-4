import HeadSection from "../Services/HeadingSection";
import Customer from "./Customer";
export default function Customers() {
  return (
    <section className="container-customers">
      <div className="container">
        <HeadSection
          subHeading="  Customer Says  "
          topHeading="Our satisfied customer says"
          contentHeading="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in"
        />
        <Customer />
      </div>
    </section>
  );
}
