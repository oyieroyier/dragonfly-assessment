import { Navbar } from "../components/navbar/Navbar";
import { Hero } from "../sections/hero/Hero";
import HolidayPackages from "../sections/holiday-packages/HolidayPackages";
import HotelCarousel from "../sections/hotel-carousel/HotelCarousel";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HolidayPackages />
      <HotelCarousel />
    </div>
  );
};

export default Home;
