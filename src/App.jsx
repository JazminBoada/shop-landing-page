import "./App.css";
import Categories from "./components/Categories";
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
      <Header />
      <Hero />
      <Gallery />
      <Products />
      <Categories />

      <div>
        <Shop />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <Reviews />
      </div>
    </div>
  );
}

export default App;
