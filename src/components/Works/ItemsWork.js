// import HeadSection from "../Services/HeadingSection";
// import Btn from "../Btn";
// export default function ItemsWork({ btn }) {
//   return (
//     <div className="container-works">
//       <div className="container content-container">
//         <ItemWork reverse={false} />
//         <ItemWork reverse={true} />
//         <ItemWork reverse={false} />
//         <div className="btn-work">
//           <Btn className="btn-nav " btn="View All Projects" />
//         </div>
//       </div>
//     </div>
//   );
// }

// function ItemWork({ reverse }) {
//   return (
//     <div className="container-item">
//       {reverse ? (
//         <>
//           <RightContentWork />
//           <LeftContentWork />
//         </>
//       ) : (
//         <>
//           <LeftContentWork />
//           <RightContentWork />
//         </>
//       )}
//     </div>
//   );
// }

// const arr = [
//   {
//     subHeading: "Illustration",
//     topHeading: "Even the all-powerful Pointing has no control",
//     contentHeading:
//       "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live inEven the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
//     img: "/snipp/public/img/blog/image_1.jpg",
//   },
//   {
//     subHeading: "Application",
//     topHeading: "Even the all-powerful Pointing has no control",
//     contentHeading:
//       "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live inEven the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
//     img: "/snipp/public/img/blog/image_2.jpg",
//   },
//   {
//     subHeading: "Web Design",
//     topHeading: "Even the all-powerful Pointing has no control",
//     contentHeading:
//       "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live inEven the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
//     img: "/snipp/public/img/blog/image_3.jpg",
//   },
// ];

// function LeftContentWork() {
//   return (
//     <div className="img-work-container">
//       <div className="img-work-content">
//         {arr.map((img) => (
//           <img src={img.img} alt={img.subHeading} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function RightContentWork({ btn }) {
//   return (
//     <div className="right-content-container">
//       {arr.map((item) => (
//         <HeadSection
//           subHeading={item.subHeading}
//           topHeading={item.topHeading}
//           contentHeading={item.contentHeading}
//         >
//           <Btn className="btn-nav" btn="get in touch " />
//         </HeadSection>
//       ))}
//     </div>
//   );
// }

import HeadSection from "../Services/HeadingSection";
import Btn from "../Btn";

export default function ItemsWork({ btn }) {
  return (
    <div className="container-works">
      <div className="container content-container">
        {arr.map((item, index) => (
          <ItemWork key={index} data={item} reverse={index % 2 !== 0} />
        ))}
        <div className="btn-work">
          <Btn className="btn-nav" btn="View All Projects" />
        </div>
      </div>
    </div>
  );
}

function ItemWork({ data, reverse }) {
  return (
    <div className="container-item">
      {reverse ? (
        <>
          <RightContentWork data={data} />
          <LeftContentWork img={data.img} subHeading={data.subHeading} />
        </>
      ) : (
        <>
          <LeftContentWork img={data.img} subHeading={data.subHeading} />
          <RightContentWork data={data} />
        </>
      )}
    </div>
  );
}

function LeftContentWork({ img, subHeading }) {
  return (
    <div className="img-work-container">
      <div className="img-work-content">
        <img src={img} alt={subHeading} />
      </div>
    </div>
  );
}

function RightContentWork({ data }) {
  return (
    <div className="right-content-container">
      <HeadSection
        subHeading={data.subHeading}
        topHeading={data.topHeading}
        contentHeading={data.contentHeading}
      >
        <Btn className="btn-nav" btn="Get in Touch" />
      </HeadSection>
    </div>
  );
}

const arr = [
  {
    subHeading: "Illustration",
    topHeading: "Even the all-powerful Pointing has no control",
    contentHeading:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live inEven the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    img: "/img/portfolio/work-1.jpg",
  },
  {
    subHeading: "Application",
    topHeading: "Even the all-powerful Pointing has no control",
    contentHeading:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live inEven the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    img: "/img/portfolio/work-2.jpg",
  },
  {
    subHeading: "Web Design",
    topHeading: "Even the all-powerful Pointing has no control",
    contentHeading:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live inEven the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    img: "/img/portfolio/work-3.jpg",
  },
];
