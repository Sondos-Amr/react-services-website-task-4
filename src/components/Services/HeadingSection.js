// import { children } from "react";

export default function HeadSection({
  subHeading,
  topHeading,
  contentHeading,
  children,
}) {
  return (
    <div className="heading-container">
      <HeadingContent
        subHeading={subHeading}
        topHeading={topHeading}
        contentHeading={contentHeading}
      >
        {children}
      </HeadingContent>
    </div>
  );
}

function HeadingContent({ subHeading, topHeading, contentHeading, children }) {
  return (
    <div className="heading-content">
      <h5 className="subheading">{subHeading}</h5>
      <h2 className="topHeading">{topHeading}</h2>
      <p className="contentHeading">{contentHeading}</p>
      <div>{children}</div>
    </div>
  );
}

// export default function HeadSection() {
//   return (
//     <div className="heading-container">
//       <HeadingContent
//         subHeading="Our Services"
//         topHeading="Web & Mobile app design, bring your ideas to life"
//         contentHeading="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in"
//       />
//     </div>
//   );
// }

// function HeadingContent({ subHeading, topHeading, contentHeading }) {
//   return (
//     <div className="heading-content">
//       <h5 className="subheading">{subHeading}</h5>
//       <h2 className="topHeading">{topHeading}</h2>
//       <p className="contentHeading">{contentHeading}</p>
//     </div>
//   );
// }
