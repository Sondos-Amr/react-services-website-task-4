import HeadSection from "../Services/HeadingSection";

export default function Subcribe() {
  return (
    <section className="content-subcribe">
      <div className="container">
        <HeadSection
          topHeading="Subcribe to our Newsletter"
          contentHeading="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in"
        >
          <span className="form">
            <input type="text" placeholder="Enter Email Address" />
            <span className="message-icon">
              <i class="fa-solid fa-paper-plane"></i>
            </span>
          </span>
        </HeadSection>
      </div>
    </section>
  );
}
