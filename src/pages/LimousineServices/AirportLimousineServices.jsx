/* eslint-disable react/prop-types */
import './limousine.css'
import Navbar from '../../components/CarRentalsPage/Navbar/Navbar'
import TestimonialSwiper from '../../components/HomePage/Reviews/TestimonialSwiper'
import FAQSection from '../FAQ/FAQSection'
import ContactUs from '../../components/CarRentalsPage/ContactUs/ContactUs'
import Fleets from '../../components/CarRentalsPage/Fleets/Fleets'
import { Clock, Shield, Award, Plane, Users, Building } from 'lucide-react'
import Footer from '../../components/CarRentalsPage/Footer/Footer'

const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
        <Icon className="w-8 h-8 text-amber-500 mb-4" />
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </div>
)

const AirportLimousineServices = () => {
    const services = [
        {
            icon: Plane,
            title: 'Airport Transportation',
            description:
                'Service to all major NYC airports including JFK, LaGuardia, and MacArthur Airport, plus private airports.',
        },
        {
            icon: Clock,
            title: '24/7 Availability',
            description:
                'Round-the-clock service with expert trip advisers always available to assist you.',
        },
        {
            icon: Users,
            title: 'Corporate Events',
            description:
                'Luxury shuttle buses and limousines perfect for corporate events and group transportation.',
        },
        {
            icon: Building,
            title: 'Business Class Service',
            description:
                'Modern Lincoln town cars and stretch limousines for professional business transportation.',
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
                <div className="relative bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage:'url(../../../src/assets/images/airport-limousine.jpg)',}}>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 bg-cover bg-center bg-no-repeat">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                                Airport Limousine Services
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
                                    <span>Free Consultations</span>
                                </div>
                            </div>
                            <p className="text-xl text-white mb-8">
                                Long Island&apos;s premier limousine service,
                                offering exceptional customer service and a
                                modern fleet of vehicles for all your
                                transportation needs.
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
                                    src="../../../src/assets/images/airport-limousine.jpg"
                                    alt="Luxury fleet"
                                    className="rounded-lg shadow-2xl"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    Our Clients Come First
                                </h2>
                                <div className="space-y-4 text-gray-300">
                                    <p>
                                        Dynasty Limousines is one of the largest
                                        and most established limousine services
                                        on Long Island, with a long history of
                                        professional event and corporate
                                        transportation.
                                    </p>
                                    <p>
                                        Our stretch limousines are designed with
                                        every convenience in mind, and our
                                        chauffeurs are trained, uniformed
                                        professionals that will make your
                                        transportation experience enjoyable.
                                    </p>
                                    <p>
                                        We take pride in providing responsive
                                        service to each and every client,
                                        ensuring the finest limousine
                                        transportation in New York with
                                        competitive rates for airport and ground
                                        transportation.
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

export default AirportLimousineServices
