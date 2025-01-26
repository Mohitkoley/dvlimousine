/* eslint-disable react/prop-types */
import './limousine.css'
import Navbar from '../../components/CarRentalsPage/Navbar/Navbar'
import TestimonialSwiper from '../../components/HomePage/Reviews/TestimonialSwiper'
import FAQSection from '../FAQ/FAQSection'
import ContactUs from '../../components/CarRentalsPage/ContactUs/ContactUs'
import Fleets from '../../components/CarRentalsPage/Fleets/Fleets'
import { Clock, Shield, Award, Users, Building } from 'lucide-react'
import Footer from '../../components/CarRentalsPage/Footer/Footer'

const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
        <Icon className="w-8 h-8 text-amber-500 mb-4" />
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </div>
)

const WeddingLimousineServices = () => {
    const services = [
        {
            icon: Users,
            title: 'Bridal Party Transportation',
            description:
                'Luxury transportation for the bride, groom, and wedding party to ensure everyone arrives in style.',
        },
        {
            icon: Clock,
            title: '24/7 Availability',
            description:
                'Our services are available around the clock to accommodate your wedding schedule.',
        },
        {
            icon: Building,
            title: 'Event Planning Assistance',
            description:
                'Expert staff available to help with every stage of your event planning process.',
        },
        {
            icon: Shield,
            title: 'Safety and Comfort',
            description:
                'All vehicles are equipped with GPS tracking for safe and reliable transportation.',
        },
    ];
    
    const handleScrollToContact = () => {
        const contactSection = document.getElementById('contactUs');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className="HomeContainer bg-custom-gradient-2 w-screen min-h-screen overflow-x-hidden">
                <div>
                    <Navbar />
                </div>
                <div
                    className="relative bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            'url(/src/assets/images/wedding-limousine.webp)',
                    }}
                >
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 bg-cover bg-center bg-no-repeat">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                                Wedding Limousine Services
                            </h1>
                            <div className="flex flex-wrap gap-4 mb-8 text-gray-300">
                                <div className="flex items-center">
                                    <Award className="w-5 h-5 mr-2 text-amber-500" />
                                    <span>Founded in 1999</span>
                                </div>
                                <div className="flex items-center">
                                    <Shield className="w-5 h-5 mr-2 text-amber-500" />
                                    <span>Licensed Chauffeurs</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-5 h-5 mr-2 text-amber-500" />
                                    <span>Free Consultations and Quotes</span>
                                </div>
                            </div>
                            <p className="text-xl text-white mb-8">
                                Long Island’s Choice for Wedding Limo Service
                                Your wedding day is one of the most important
                                days of your life. It should be filled with
                                happiness, family, and friends, not stress or
                                distractions. Dynasty Limousines has been the
                                ideal choice for brides and grooms in and around
                                Long Island because we combine an impressive
                                fleet of immaculately kept luxury vehicles with
                                professional experienced drivers.
                            </p>
                            <button
                                onClick={handleScrollToContact}
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-amber-500 hover:bg-amber-400 transition-colors"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
                <section className="bg-custom-gradient-2 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Our Premium Services
                            </h2>
                            <p className="text-gray-300 max-w-2xl mx-auto">
                                Experience luxury transportation with our
                                comprehensive range of services designed for
                                your comfort and convenience.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <ServiceCard key={index} {...service} />
                            ))}
                        </div>
                    </div>
                </section>
                <section className="bg-custom-gradient-2 from-gray-900 to-gray-800 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <img
                                    src="../../../src/assets/images/wedding-limousine.webp"
                                    alt="Luxury wedding fleet"
                                    className="rounded-lg shadow-2xl"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    We Cater to Brides and Bridesmaids
                                </h2>
                                <div className="space-y-4 text-gray-300">
                                    <p>
                                        Our massive fleet of limousines, party
                                        buses, and shuttles will make it easy
                                        for everyone from the bride and groom to
                                        the wedding party and guests to travel
                                        in style and comfort.
                                    </p>
                                    <p>
                                        Dynasty Limousine offers traditional
                                        stretch limousines, 20-passenger
                                        Cadillac Escalades, 27-passenger luxury
                                        shuttle buses, and our regal Phantom V
                                        Rolls Royce. Every vehicle in our fleet
                                        is meticulously cared for so you can be
                                        assured you will be arriving in a clean,
                                        comfortable style. Call us today to
                                        learn more.
                                    </p>
                                    <p>
                                        We cater to customers in New York City,
                                        Nassau County, Suffolk County, The
                                        Hamptons, and all the surrounding areas.
                                        Our drivers are familiar with all local
                                        hotels, halls, and area attractions. Our
                                        vehicles are equipped with GPS tracking
                                        and navigation systems for added routing
                                        ability and safety.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <button onClick={handleScrollToContact}
                                        className="inline-flex items-center px-6 py-3 border border-amber-500 text-base font-medium rounded-md text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition-colors">
                                        Request a Quote
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
        </div>
    )
}

export default WeddingLimousineServices
