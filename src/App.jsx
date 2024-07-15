import React from "react"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products/Products"
import AOS from "aos"
import 'aos/dist/aos.css'
import TopProducts from "./components/TopProducts/TopProducts"
import Banner from "./components/Banner/Banner"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"
function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className=" dark:bg-gray-950 dark:text-white duration-200">
    <Navbar/>
    <Hero/>
    <Products/>
    <TopProducts/>
    <Banner/>
    <Testimonials/>
    <Footer/>
    </div>
  )
}

export default App
