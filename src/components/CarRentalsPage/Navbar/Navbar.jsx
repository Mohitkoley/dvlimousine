import logo from "../../../assets/images/logo.png";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contactUs");
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToReviews = () => {
    const reviewsSection = document.getElementById("reviews");
    reviewsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToFleets = () => {
    const fleetsSection = document.getElementById("fleets");
    fleetsSection.scrollIntoView({ behavior: 'smooth' });
  }

  const handleScrollToFAQ = () => {
    const faqSection = document.getElementById("faq");
    faqSection.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <section className=" flex flex-col items-center">
        {/* Logo Section */}
        <div className="w-full h-1/5 text-white flex flex-col justify-center items-center gap-2 mb-16 mt-10">
          <img src={logo} alt="Logo" className="logo w-40 h-32" />
          {/* <div className="tagline text-lg font-light">Space for tagline</div> */}
        </div>

        {/* Navbar */}
        <div
          className={`Navbar w-full bg-black/50 text-white flex flex-row flex-wrap justify-center md:gap-12 gap-1 items-center shadow-lg`}
        >
          <span onClick={() => navigate('/')}>Home</span>
          <span onClick={handleScrollToFleets}>Our Fleet</span>
          <div className='dropdown'>
            <span>Limousine Services</span>
            <div className="dropdown-content">
              <a onClick={() => navigate('/limousine')}>Airport Limousine Service</a>
              <a onClick={() => navigate('/wedding')}>Wedding Limousine Service</a>
              <a onClick={() => navigate('/prom')}>Prom Limousine Service</a>
              <a onClick={() => navigate('/winery')}>Winery Tours</a>
              <a onClick={() => navigate('/nightsout')}>Nights Out on the Town</a>
              <a onClick={() => navigate('/bachelor')}>Bachelor and Bachelorette Parties</a>
              <a onClick={() => navigate('/corporate')}>Corporate</a>
            </div>
          </div>
          <span onClick={handleScrollToReviews}>Reviews</span>
          <div className='dropdown'>
            <span>About Us</span>
            <div className='dropdown-content'>
              <a onClick={handleScrollToFAQ}>FAQ</a>
            </div>
          </div>
          <div className='dropdown'>
            <span onClick={handleScrollToContact}>Contact Us</span>
            {/* <div className='dropdown-content'>
            <a onClick={()=>navigate('/contact')}>Request a Call back</a>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar
