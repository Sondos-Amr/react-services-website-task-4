import Landing from "./components/Home/Landing";
import Gallery from "./components/Gallery";
import Services from "./components/Services/Services";
import Subcribe from "./components/Subcribe/Subcribe";
import Works from "./components/Works/Work";
import Customers from "./components/Customers/Customers";
import Achievements from "./components/Achievements/Achievements";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="app">
      <Landing />
      <Gallery />
      <Services />
      <Subcribe />
      <Works />
      <Customers />
      <Achievements />
      <Blog />
      <Footer />
    </div>
  );
}
