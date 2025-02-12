import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo.png"

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const logoRef = useRef(null); // Refs for sections
  // const reviewsRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => {
      if (logoRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(logoRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className=" flex flex-col items-center">
        {/* Logo Section */}
        <div
          ref={logoRef}
          className="w-full h-1/5 text-white flex flex-col justify-center items-center gap-2 mb-16 mt-10"
        >
          <img src={logo} alt="Logo" className="logo w-64 h-48" />
          {/* <div className="tagline text-lg font-light">Space for tagline</div> */}
        </div>

        {/* Navbar */}
        <div
          className={`Navbar w-full bg-black/50 text-white flex flex-row flex-wrap justify-center md:gap-12 gap-1 items-center shadow-lg ${isFixed ? 'fixed-navbar' : ''}`}
        >
          <span onClick={() => navigate('/')}>Home</span>
          <span>Our Fleet</span>
          <div className='dropdown'>
            <span>Limousine Services</span>
            <div className="dropdown-content">
              <a onClick={() => navigate('/limousine/Airport')}>Airport Limousine Service</a>
              <a onClick={() => navigate('/limousine/Wedding')}>Wedding Limousine Service</a>
              <a onClick={() => navigate('/limousine/Prom')}>Prom Limousine Service</a>
              <a onClick={() => navigate('/limousine/Winery')}>Winery Tours</a>
              <a onClick={() => navigate('/limousine/Nights')}>Nights Out on the Town</a>
              <a onClick={() => navigate('/limousine/Bachelor')}>Bachelor and Bachelorette Parties</a>
              <a onClick={() => navigate('/limousine/Corporate')}>Corporate</a>
            </div>
          </div>
          <span>Reviews</span>
          <div className='dropdown'>
            <span>About Us</span>
            <div className='dropdown-content'>
              <a onClick={() => navigate('/faq')}>FAQ</a>
            </div>
          </div>
          <div className='dropdown'>
            <span>Contact Us</span>
            <div className='dropdown-content'>
              <a onClick={() => navigate('/contact')}>Request a Call back</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar
