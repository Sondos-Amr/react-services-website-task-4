import HeadSection from "../Services/HeadingSection";
export default function FooterSection() {
  return (
    <div className="footer-container">
      <HeadSection
        topHeading="Snipp."
        contentHeading="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
      />
      <HeadSection topHeading="Quick Links">
        <ListFoot
          Home="Home"
          Case="Case studies"
          Services="Services"
          Portfolio="Portfolio"
          About="About"
          co="Contact"
        />
      </HeadSection>
      <HeadSection topHeading="Contact Information">
        <ContactInfo
          location="198 West 21th Street, Suite 721 New York NY 10016"
          phone="+ 1235 2355 98"
          site="info@yoursite.com"
          email="email@email.com"
        />
      </HeadSection>
      {/* <HeadSection
        topHeading={<i class="fa-brands fa-x-twitter"></i>}
        subHeading={<i class="fa-brands fa-facebook-f"></i>}
        contentHeading={<i class="fa-brands fa-instagram"></i>}
      /> */}
      <HeadSection>
        <SocialList
          className="icons-footer"
          x={<i class="fa-brands fa-x-twitter"></i>}
          faceBook={<i class="fa-brands fa-facebook-f"></i>}
          instagram={<i class="fa-brands fa-instagram"></i>}
        />
      </HeadSection>
    </div>
  );
}

function ListFoot({ Home, Case, Services, Portfolio, About, co }) {
  return (
    <ul>
      <li>
        <a href="#">{Home}</a>
      </li>
      <li>
        <a href="#">{Case}</a>
      </li>
      <li>
        <a href="#">{Services}</a>
      </li>
      <li>
        <a href="#">{Portfolio}</a>
      </li>
      <li>
        <a href="#">{About}</a>
      </li>
      <li>
        <a href="#">{co}</a>
      </li>
    </ul>
  );
}

function ContactInfo({ location, phone, site, email }) {
  return (
    <ul>
      <li>
        <a href="#">{location}</a>
      </li>
      <li>
        <a href="#">{phone}</a>
      </li>
      <li>
        <a href="#">{site}</a>
      </li>
      <li>
        <a href="#">{email}</a>
      </li>
    </ul>
  );
}

function SocialList({ x, faceBook, instagram }) {
  return (
    <ul className="social-icons">
      <li>
        <a href="#">{x}</a>
      </li>
      <li>
        <a href="#">{faceBook}</a>
      </li>
      <li>
        <a href="#">{instagram}</a>
      </li>
    </ul>
  );
}
