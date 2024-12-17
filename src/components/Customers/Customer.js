export default function Customer() {
  return (
    <div className="wrapper-container swiper">
      <div className="  wrapper ">
        <ul className="container-customer swiper-wrapper">
          {data.map((customer, index) => (
            <ContentCustomer
              key={index}
              img={customer.img}
              descrpition={customer.descrpition}
              name={customer.name}
              position={customer.position}
            />
          ))}
        </ul>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  );
}

function ContentCustomer({ img, descrpition, name, position }) {
  return (
    <div className="slider-list swiper-slide">
      <div className="content ">
        <div className="customer-img">
          <img src={img} alt={name} />
          <span className="icon-customer-img">
            <i class="fa-solid fa-quote-left"></i>
          </span>
        </div>
        <div className="desc-coustomer">
          <p className="content-desc-coustomer">{descrpition}</p>
        </div>
        <div className="customer-info">
          <h5 className="customer-name">{name}</h5>
          <span className="customer-position">{position}</span>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    img: "/img/customer/person_1.jpg",
    descrpition:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    name: "Dennis Green",
    position: "System Analytics",
  },
  {
    img: "/img/customer/person_2.jpg",
    descrpition:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    name: "Dennis Green",
    position: "System Analytics",
  },
  {
    img: "/img/customer/person_2.jpg",
    descrpition:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    name: "Dennis Green",
    position: "System Analytics",
  },
];
