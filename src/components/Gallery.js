import Btn from "./Btn";
export default function Gallery() {
  return (
    <section className="gallery-container">
      <Items />
      <ContentGallery />
    </section>
  );
}

function Items() {
  return (
    <div className="gallery-groub">
      <div className="container-items">
        <div className="col-1">
          <Item
            className="img-1"
            topTitle="The Verge"
            subTitle="Website"
            img="/img/gallary/image_1.jpg.webp"
            imgUser="/img/customer/person_1.jpg"
            user="John Bruce "
            position="Designer"
          />
        </div>
        <div className="col-2">
          <Item
            className="img-2"
            topTitle="The Verge"
            subTitle="Website"
            img="/img/gallary/image_5.jpg.webp"
            imgUser="/img/customer/person_1.jpg"
            user="John Bruce "
            position="Designer"
          />
          <Item
            className="img-3"
            topTitle="The Verge"
            subTitle="Website"
            img="/img/gallary/image_6.jpg.webp"
            imgUser="/img/customer/person_1.jpg"
            user="John Bruce "
            position="Designer"
          />
        </div>
        <div className="col-3">
          <Item
            className="img-4"
            topTitle="The Verge"
            subTitle="Website"
            img="/img/gallary/image_4.jpg.webp"
            imgUser="/img/customer/person_1.jpg"
            user="John Bruce "
            position="Designer"
          />
          <Item
            className="img-5"
            topTitle="The Verge"
            subTitle="Website"
            img="/img/gallary/image_3.jpg.webp"
            imgUser="/img/customer/person_1.jpg"
            user="John Bruce "
            position="Designer"
          />
        </div>
        <div className="col-4">
          <Item
            className="img-6"
            topTitle="The Verge"
            subTitle="Website"
            img="/img/gallary/image_2.jpg.webp"
            imgUser="/img/customer/person_1.jpg"
            user="John Bruce "
            position="Designer"
          />
        </div>
      </div>
    </div>
  );
}

function Item({ topTitle, img }) {
  return (
    <div className="item">
      <li className={topTitle}>
        <img className="main-img" src={img} alt={topTitle} />
      </li>
    </div>
  );
}

function ContentGallery({ btn }) {
  return (
    <div className="Web-designer container">
      <h1 className="top-title ">
        UI/UX, visual, <strong>Web designer</strong> with more than 12 years of
        <br /> experience in designing websites and mobile apps.
      </h1>
      <Btn btn="Get in touch " />
    </div>
  );
}

// const arr = [
//   {
//     topTitle: "The Verge",
//     subTitle: "Website",
//     img: "/img/gallary/image_1.jpg.webp",
//     userImg: "/img/customer/person_1.jpg",
//     user: "John Bruce ",
//     position: "Designer",
//   },
//   {
//     topTitle: "The Verge",
//     subTitle: "Website",
//     img: "/img/gallary/image_2.jpg.webp",
//     user: "John Bruce ",
//     userImg: "/img/customer/person_1.jpg",
//     position: "Designer",
//   },
//   {
//     topTitle: "The Verge",
//     subTitle: "Website",
//     img: "/img/gallary/image_3.jpg.webp",
//     user: "John Bruce ",
//     position: "Designer",
//   },
//   {
//     topTitle: "The Verge",
//     subTitle: "Website",
//     img: "/img/gallary/image_4.jpg.webp",
//     user: "John Bruce ",
//     userImg: "/img/customer/person_1.jpg",
//     position: "Designer",
//   },
//   {
//     topTitle: "The Verge",
//     subTitle: "Website",
//     img: "/img/gallary/image_5.jpg.webp",
//     user: "John Bruce ",
//     userImg: "/img/customer/person_1.jpg",
//     position: "Designer",
//   },
//   {
//     topTitle: "The Verge",
//     subTitle: "Website",
//     img: "/img/gallary/image_6.jpg.webp",
//     user: "John Bruce ",
//     userImg: "/img/customer/person_1.jpg",
//     position: "Designer",
//   },
// ];

// ------------------------------------------------------

// export default function Gallery() {
//   return (
//     <div className="gallery-groub">
//       <Items />
//     </div>
//   );
// }

// const arr = [
//   {
//     topTitle: "The Verge",
//     subTitle: "Website",
//     img: "/img/gallary/image_1.jpg.webp",
//     userImg: "/img/customer/person_1.jpg",
//     user: "John Bruce ",
//     position: "Designer",
//   },
//   {
//     topTitle: "The Verge",
//     subTitle: "Website",
//     img: "/img/gallary/image_2.jpg.webp",
//     user: "John Bruce ",
//     userImg: "/img/customer/person_1.jpg",
//     position: "Designer",
//   },
//   {
//     topTitle: "The Verge",
//     subTitle: "Website",
//     img: "/img/gallary/image_3.jpg.webp",
//     user: "John Bruce ",
//     position: "Designer",
//   },
//   {
//     topTitle: "The Verge",
//     subTitle: "Website",
//     img: "/img/gallary/image_4.jpg.webp",
//     user: "John Bruce ",
//     userImg: "/img/customer/person_1.jpg",
//     position: "Designer",
//   },
//   {
//     topTitle: "The Verge",
//     subTitle: "Website",
//     img: "/img/gallary/image_5.jpg.webp",
//     user: "John Bruce ",
//     userImg: "/img/customer/person_1.jpg",
//     position: "Designer",
//   },
//   {
//     topTitle: "The Verge",
//     subTitle: "Website",
//     img: "/img/gallary/image_6.jpg.webp",
//     user: "John Bruce ",
//     userImg: "/img/customer/person_1.jpg",
//     position: "Designer",
//   },
// ];
// function Items() {
//   return (
//     <ul className="gallery-content">
//       {arr.map((item) => (
//         <Item
//           topTitle={item.topTitle}
//           subTitle={item.subTitle}
//           img={item.img}
//           imgUser={item.userImg}
//           user={item.user}
//           position={item.position}
//         />
//       ))}
//     </ul>
//   );
// }

// function Item({ topTitle, subTitle, img, imgUser, user, position }) {
//   return (
//     <li>
//       <div className="topItem">
//         <h3 className="topTitle">{topTitle}</h3>
//         <span className="subTitle">{subTitle}</span>
//       </div>
//       <img src={img} alt={topTitle} />
//       <div className="bottonItem">
//         <img src={imgUser} alt={user} />
//         <div className="buttomItem">
//           <h3 className="user">{user}</h3>
//           <span className="position">{position}</span>
//         </div>
//       </div>
//     </li>
//   );
// }
