export default function BlogBox() {
  return (
    <div className="cards">
      {data.map((card, index) => (
        <BlogCard
          key={index}
          img={card.img}
          date={card.date}
          title={card.title}
          descrpition={card.descrpition}
        />
      ))}
    </div>
  );
}

function BlogCard({ img, date, title, descrpition }) {
  return (
    <div className="blog-card">
      <div className="img-card">
        <img src={img} alt={title} />
      </div>
      <div className="content-card">
        <div className="subTitle">
          <span className="blog-card2">{date}</span>
          <span className="title">{title}</span>
          <span className="icon">
            <a href="#">
              <i class="fa-regular fa-message"></i>
            </a>
            <span>3</span>
          </span>
        </div>
        <div className="desc">
          <p>{descrpition}</p>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    img: "/img/blog/image_1.jpg",
    date: " July 12, 2018",
    descrpition:
      "Even the all-powerful Pointing has no control about the blind texts  ",
    title: "Admin",
  },
  {
    img: "/img/blog/image_2.jpg",
    date: " July 12, 2018",
    descrpition:
      "Even the all-powerful Pointing has no control about the blind texts  ",
    title: "Admin",
  },
  {
    img: "/img/blog/image_3.jpg",
    date: " July 12, 2018",
    descrpition:
      "Even the all-powerful Pointing has no control about the blind texts  ",
    title: "Admin",
  },
];
