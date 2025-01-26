/* eslint-disable react/prop-types */
import './limousine.css'
import Navbar from '../../components/CarRentalsPage/Navbar/Navbar'
import TestimonialSwiper from '../../components/HomePage/Reviews/TestimonialSwiper'
import FAQSection from '../FAQ/FAQSection'
import ContactUs from '../../components/CarRentalsPage/ContactUs/ContactUs'
import Fleets from '../../components/CarRentalsPage/Fleets/Fleets'
import { Clock, Shield, Award, Users } from 'lucide-react'
import Footer from '../../components/CarRentalsPage/Footer/Footer'

const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
        <Icon className="w-8 h-8 text-amber-500 mb-4" />
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </div>
)

const PromLimousineServices = () => {
    const services = [
        {
            icon: Users,
            title: 'Safe Group Transportation',
            description:
                'Travel together with friends in a safe and stylish environment.',
        },
        {
            icon: Clock,
            title: '24/7 Availability',
            description:
                'Our services are available around the clock to accommodate your prom schedule.',
        },
        {
            icon: Shield,
            title: 'Experienced Drivers',
            description:
                'Professional drivers ensure a safe and pleasant trip for your teens.',
        },
        {
            icon: Award,
            title: 'Free Consultations',
            description:
                'Contact us for a free consultation or quote for your prom transportation.',
        },
    ]

    const handleScrollToContact = () => {
        const contactSection = document.getElementById('contactUs')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

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
                            'url(/src/assets/images/prom-limousine.jpg)',
                    }}
                >
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 bg-cover bg-center bg-no-repeat">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                                Prom Limousine Services
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
                                Ride to Your Prom in Style Dynasty Limousine is
                                the choice for both parents and party-goers
                                because we take care of both style and safety.
                                We know you want your teens to have fun, but
                                their safety is of the utmost importance.
                                Dynasty Limousine has years of experience in
                                prom and party transportation, so you can be
                                sure we will provide a safe and pleasant trip
                                for your youngster.
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
                                    src="../../../src/assets/images/prom-limousine.jpg"
                                    alt="Luxury prom fleet"
                                    className="rounded-lg shadow-2xl"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    Choose the Style You Want
                                </h2>
                                <div className="space-y-4 text-gray-300">
                                    <p>
                                        We offer stretch limos and Cadillac
                                        Escalades as well as stylish, modern
                                        party buses. Your group will enjoy the
                                        convenience of traveling together and
                                        having the excitement begin when they
                                        leave the driveway.
                                    </p>
                                    <p>
                                        Our professional drivers will ensure
                                        your teens arrive at their destination
                                        safely and on time. Call our experienced
                                        event specialists, and leave the driving
                                        to us.
                                    </p>
                                    <p>
                                        Contact us for a free consultation or
                                        quote!
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <button
                                        onClick={handleScrollToContact}
                                        className="inline-flex items-center px-6 py-3 border border-amber-500 text-base font-medium rounded-md text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition-colors"
                                    >
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

export default PromLimousineServices
