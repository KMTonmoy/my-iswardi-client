'use client';

import React from 'react';
import { motion } from 'framer-motion';

const locations = [
    {
        title: 'Hardinge Bridge',
        description: 'A historic railway bridge over the Padma River. A symbol of engineering and beauty.',
        img: 'https://cdn.daily-sun.com/public/news_images/2017/08/01/67425689.jpg',
    },
    {
        title: 'Lalon Shah Bridge',
        description: 'A modern road bridge beside the Hardinge Bridge. A majestic sunset view point.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Lalon_shah_bridge.jpg/2560px-Lalon_shah_bridge.jpg',
    },
    {
        title: 'Pakshi Resort',
        description: 'A serene resort surrounded by nature. Perfect for family and weekend getaways.',
        img: 'https://vromonguide.com/wp-content/uploads/Pakshi-Resort-Pabna.jpg',
    },
    {
        title: 'Chatmohar',
        description: 'A place known for culture, lakes, and historical sites in Pabna.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Opotirodh_chatmohar.jpg',
    },
    {
        title: 'Pabna Mental Hospital',
        description: 'One of the oldest mental hospitals in South Asia, located in Pabna town.',
        img: 'https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1/uploads/dten/2017/10/Pabna-Mental-Hospital-Photo-01a.png',
    },
    {
        title: 'Pabna Mental Hospital',
        description: 'One of the oldest mental hospitals in South Asia, located in Pabna town.',
        img: 'https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1/uploads/dten/2017/10/Pabna-Mental-Hospital-Photo-01a.png',
    },
    {
        title: 'Ruppur Nuclear Power Plant',
        description: 'Ruppur Nuclear Power Plant is the first nuclear power plant in Bangladesh, located in Ishwardi, Pabna. It marks a significant step in the country’s move towards nuclear energy.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6_sFy_Kr024-k06gcLu23Cox3bNEXXXo7A&s',

    },
];

const FeaturedLocations = () => {
    return (
        <div className="py-16 px-4 md:px-20 bg-gradient-to-r rounded-2xl from-[#F8E1C1] to-[#F5A623]">
            <motion.h2
                className="text-4xl font-bold text-center text-gray-800 mb-12 border-b-4 border-[#F7EEDC] inline-block"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Featured Locations in Pabna
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {locations.map((place, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-white border-4 border-[#F7EEDC] rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                    >
                        <img src={place.img} alt={place.title} className="w-full h-56 object-cover" />
                        <div className="p-5">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{place.title}</h3>
                            <p className="text-gray-600 text-base">{place.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedLocations;
