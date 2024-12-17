export default function ServicesItems() {
  return (
    <div className="container-item">
      <Item
        heading="Strategy"
        body="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        icon={<i class="fa-solid fa-circle-check"></i>}
        backgroundColor="#def4fb"
        color="#29bae4"
      />
      <Item
        heading="Design"
        body="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        icon={<i class="fa-solid fa-laptop"></i>}
        backgroundColor="#fce7f1"
        color="#ee76ad"
      />
      <Item
        heading="Development"
        body="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        icon={<i class="fa-solid fa-gear"></i>}
        backgroundColor="#fdf2ea"
        color="#efac78"
      />
      <Item
        heading="Help & Supports"
        body="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        icon={<i class="fa-solid fa-question"></i>}
        backgroundColor="#ebfdf4"
        color="#79efb4"
      />
    </div>
  );
}

function Item({ heading, body, icon, backgroundColor, color }) {
  return (
    <div className="contant-item">
      <div className="icon-item">
        <span
          className="icon-content"
          style={{ backgroundColor: backgroundColor, color: color }}
        >
          {icon}
        </span>
      </div>
      <div className="itom-body">
        <h3>{heading}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
}
