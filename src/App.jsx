import "./App.css";
import { motion } from "framer-motion";
import Categories from "./components/Categories";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import Service from "./components/Service";
import Shop from "./components/Shop";

function App() {
  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1.5 },
    viewport: { once: true },
  };

  return (
    <div>
      <motion.div {...fadeIn}>
        <div id="home">
          <Header />
          <Hero />
        </div>
      </motion.div>

      <motion.div {...fadeIn}>
        <Gallery />
      </motion.div>

      <motion.div {...fadeIn}>
        <Products />
      </motion.div>

      <motion.div {...fadeIn}>
        <Categories />
      </motion.div>

      <motion.div {...fadeIn}>
        <div id="shop">
          <Shop />
        </div>
      </motion.div>

      <motion.div {...fadeIn}>
        <Reviews />
      </motion.div>

      <motion.div {...fadeIn}>
        <div id="service">
          <Service />
        </div>
      </motion.div>

      <motion.div {...fadeIn}>
        <div id="connect">
          <Connect />
        </div>
      </motion.div>

      <motion.div {...fadeIn}>
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
