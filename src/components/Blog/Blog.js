import BlogBox from "./BlogItem";
import HeadSection from "../Services/HeadingSection";
export default function Blog() {
  return (
    <section className="blog-section">
      <div className="container">
        <HeadSection
          subHeading="Blog"
          topHeading="Recent Blog"
          contentHeading="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in"
        />
        <BlogBox />
      </div>
    </section>
  );
}
