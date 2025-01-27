import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CarData from '../../assets/CarData/CarData';
import "./fleetslider.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const FleetSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? CarData.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === CarData.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };
    return (
        <>
          <div className='mx-10 py-12'>
          <div className="relative w-full max-w-4xl mx-auto h-[600px] group">
            <div className="relative h-full overflow-hidden rounded-2xl">
                {/* Main Image and Content */}
                <div 
                    className="absolute w-full h-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    <div className="flex h-full" style={{ width: `${CarData.length * 100}%` }}>
                        {CarData.map((car, index) => (
                            <div 
                                key={index} 
                                className="relative w-full h-full"
                                style={{ width: `${100 / CarData.length}%` }}
                            >
                                <img
                                    src={car.img}
                                    alt={car.name}
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                                    <h2 className="text-3xl font-bold mb-2">{car.name}</h2>
                                    <div className="flex gap-4 mb-2">
                                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                                            {car.seats} Seats
                                        </span>
                                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                                            {car.AC}
                                        </span>
                                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                                            {car.type}
                                        </span>
                                    </div>
                                    {/* <div className="flex justify-between items-center">
                                        <span className="text-2xl font-semibold">{car.price}</span>
                                        <span className="bg-white text-black px-4 py-2 rounded-lg">
                                            {car.Chauffeur}
                                        </span>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Dots Navigation */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {CarData?.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                currentIndex === index ? 'bg-white w-4' : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            </div>
            </div>
         </div>
        </>
    );
};

export default FleetSlider;
