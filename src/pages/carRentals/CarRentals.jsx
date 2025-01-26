import './carRentals.css';
import AboutUs from '../../components/CarRentalsPage/AboutUs/AboutUs';
import Services from '../../components/CarRentalsPage/Services/Services';
import Fleets from '../../components/CarRentalsPage/Fleets/Fleets';
import Navbar from '../../components/CarRentalsPage/Navbar/Navbar';
import Footer from '../../components/CarRentalsPage/Footer/Footer';
import ContactUs from '../../components/CarRentalsPage/ContactUs/ContactUs';
import TestimonialSwiper from '../../components/HomePage/Reviews/TestimonialSwiper';
import FAQSection from '../FAQ/FAQSection';

const CarRentals = () => {
  return (
    <div className='HomeContainer bg-custom-gradient-2 w-screen min-h-screen overflow-x-hidden'>
      <div>
        <Navbar />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Services />
      </div>
      <div id="faq">
       <FAQSection />
      </div>
      <div id="fleets">
        <Fleets />
      </div>
      <div id="contactUs">
        <ContactUs />
      </div>
      <div id="reviews">
        <TestimonialSwiper />
      </div>
      <Footer />
    </div>
  );
};

export default CarRentals;
