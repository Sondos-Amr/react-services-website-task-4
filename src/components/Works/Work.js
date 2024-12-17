import HeadSection from "../Services/HeadingSection";
import ItemsWork from "./ItemsWork";
export default function Works() {
  return (
    <section className="work-container">
      <div className="container">
        <HeadSection
          subHeading=" Works "
          topHeading="View our works below to see our design and way of development."
          contentHeading="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in"
        />
        <ItemsWork />
      </div>
    </section>
  );
}
