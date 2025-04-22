'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const Banner = () => {
    const [slides, setSlides] = useState<{ imageUrl: string; description: string }[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const res = await axios.get('/banner.json');
                setSlides(res.data);
            } catch (err) {
                console.error("Error fetching banner data", err);
            }
        };
        fetchSlides();
    }, []);

    useEffect(() => {
        if (slides.length === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative rounded-2xl w-full h-[600px] overflow-hidden bg-gray-900 flex items-center justify-center">
            {slides.length === 0 ? (
                <div className="text-center text-gray-300 text-xl font-semibold">
                    Banner not found
                </div>
            ) : (
                <>
                    <AnimatePresence>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0"
                        >
                            <img
                                src={slides[currentIndex].imageUrl}
                                alt="Banner"
                                className="w-full h-full object-cover"
                            />
                            {/* Cool dark overlay */}
                            <div className="absolute inset-0 bg-[#00000077]  "></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                                <p className="text-white text-3xl font-semibold max-w-2xl drop-shadow-md">
                                    {slides[currentIndex].description}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Indicator */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                        {slides.map((_, index) => (
                            <span
                                key={index}
                                className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
                            />
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="absolute bottom-4 right-4 flex space-x-4 z-30">
                        <button
                            onClick={handlePrev}
                            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
                        >
                            &lt;
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
                        >
                            &gt;
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Banner;
