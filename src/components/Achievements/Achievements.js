import HeadSection from "../Services/HeadingSection";
import AchievementsItems from "./AchievementsItems";
export default function Achievements() {
  return (
    <section className="achievements-container">
      <div className="container">
        <HeadSection
          topHeading="Our achievements"
          contentHeading="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in"
        />
        <AchievementsItems />
      </div>
    </section>
  );
}
