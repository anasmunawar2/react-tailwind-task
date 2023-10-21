import AppointSection from "./components/AppointSection";
import Graph from "./components/Graph";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductSec from "./components/ProductSec";
import Table from "./components/Table";

function App() {
  return (
    <main className="container mx-auto px-4 md:px-20">
      <Navbar />
      <Hero />
      <Graph />
      <AppointSection />
      <ProductSec />
      <Table />
    </main>
  );
}

export default App;
