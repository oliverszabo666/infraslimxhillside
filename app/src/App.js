import "./css/app/app.css";
import Nav from "./comp/nav/Nav.jsx";
import Hero from "./comp/hero/Hero.jsx";
import Reservation from "./comp/reservation/Reservation";
import About from "./comp/about/About";
import Infraslim from "./comp/infraslim/Infraslim";

const app = () => {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <About />
      <Infraslim />
      <Reservation />
    </div>
  );
};

export default app;
