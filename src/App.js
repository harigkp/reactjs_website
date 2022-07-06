import Loader from "./components/Loader";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Package from "./components/Package";
import Packages from "./components/Packages";
import About from "./components/About";
import Customer from "./components/Customer";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
        <Loader />
        <Header />
        <Slider />
        <Package />
        <Packages />
        <About />
        <Customer />
      <Footer />
    </div>
  );
}

export default App;
