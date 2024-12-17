import Btn from "../Btn";
export default function Home({ btn }) {
  return (
    <div className="home container">
      <h1 className="top-title">
        We love to create <br /> <strong>Beautiful</strong> websites
      </h1>
      <Btn btn="get in touch " />
    </div>
  );
}
