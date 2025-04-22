'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const hotlinesData = [
    {
        _id: '1',
        title: 'Ishwardi Hospital',
        image: 'https://file-rajshahi.portal.gov.bd/uploads/70fe8c3a-98cd-4df5-a9db-bfa3e1d7ac8c//678/88c/c08/67888cc0884e4360678383.jpg',
    },
    {
        _id: '2',
        title: 'Police Station',
        image: 'https://www.somoyerkonthosor.com/admin/post_image/Ishwardi-Police-Station66b32fedcc923.webp',
    },
    {
        _id: '3',
        title: 'Fire Service',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiX8e69blKLt1hWYPD5GFcHuvd4tO6h35UjzIfftcWLCUstbPYdqvhyphenhyphenB6qY4ESNzcOJYA2ubD1CyM7AaY9anJHxJ18CtQQPuEoZiAqoSt9wtElGweIctFl8yK3IivM2nat4L6G18gRSFWt4/w1200-h630-p-k-no-nu/rajshahi-division-fire-service-bangladesh.jpg',
    },
    {
        _id: '4',
        title: 'Ambulance Service',
        image: 'https://24ambulance.com/wp-content/uploads/2023/05/Ac-ambulance-service-24ambulance-scaled.jpg',
    },

];

const Hotlines = () => {
    return (
        <div className="py-4">
            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-8"
            >
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">
                    <Typewriter
                        words={['📞 Emergency Hotlines']}
                        loop={false}
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </h1>
                <p className="text-sm text-gray-600 mt-2">Essential contacts for Ishwardi citizens — stay safe & informed.</p>
            </motion.div>

            {/* Grid of Hotlines */}
            <div className="grid grid-cols-3 grid-rows-4 gap-2">
                {hotlinesData.map((item, index) => (
                    <motion.div
                        key={item._id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`
              relative overflow-hidden rounded-2xl shadow-xl
              border-4 border-[#F7EEDC]
              ${index === 0 ? 'col-span-2 row-span-2' :
                                index === 1 ? 'row-span-2 col-start-3' :
                                    index === 2 ? 'col-span-2 row-span-2 col-start-2 row-start-3' :
                                        'row-span-2 col-start-1 row-start-3'}
            `}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover brightness-75"
                        />
                        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white text-center p-4">
                            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                            <a
                                href={`/hotlines/${item._id}`}
                                className="text-sm bg-white text-black px-4 py-1 rounded-full transition hover:scale-105 hover:bg-[#F7EEDC] focus:outline-none focus:ring-2 focus:ring-[#F7EEDC] focus:ring-offset-2 animate-pulse"
                            >
                                <span className="flex items-center gap-1">
                                    View Details <span className="animate-ping inline-block h-2 w-2 bg-red-500 rounded-full"></span>
                                </span>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Hotlines;
