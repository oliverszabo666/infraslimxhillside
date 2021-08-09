import "./css/app/app.css";
import Nav from "./comp/nav/Nav.jsx";
import Hero from "./comp/hero/Hero.jsx";

const app = () => {
  return (
    <div className="app">
      <Nav />
      <Hero />
    </div>
  );
};

export default app;
