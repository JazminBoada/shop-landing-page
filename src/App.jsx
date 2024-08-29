import "./App.css";
import Categories from "./components/Categories";
import Connect from "./components/Connect";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import Service from "./components/Service";
import Shop from "./components/Shop";

function App() {
  return (
    <div>
      <div id="home">
        <Header />
      </div>
      <Hero />
      <Gallery />
      <Products />
      <Categories />

      <div id="shop">
        <Shop />
      </div>
      <div>
        <Reviews />
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="connect">
        <Connect />
      </div>
    </div>
  );
}

export default App;
