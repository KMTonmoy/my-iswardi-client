'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const businesses = [
    {
        title: 'RRP Center',
        description: 'Best electronics and repairs in town. Trusted by many in Ishwardi.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm0hEM2ekTVTS86wBDSHz0_mNUzVflfTbZ1g&s',
        reverse: false,
    },
    {
        title: 'Food Plaza',
        description: 'Delicious and authentic local food. A must-visit for foodies!',
        img: 'https://b.zmtcdn.com/data/pictures/9/19983489/87f142e8c1be4abdbba551b8679187ac.jpg',
        reverse: true,
    },
    {
        title: 'Ishwardi Bazar',
        description: 'One-stop shop for all your daily needs with quality service.',
        img: 'https://www.bd24live.com/bangla/wp-content/uploads/2022/07/d89c7217-6d18-43a2-a967-5f1d5d5e7df0orca_share_media.jpeg',
        reverse: false,
    },
];

const LocalBusinesses = () => {
 

    return (
        <div className="space-y-16 py-10 w-full    ">
            <motion.h2
                className="text-4xl font-bold text-center text-gray-800 mb-10 border-b-4 border-[#F7EEDC] inline-block"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Local Businesses in Ishwardi
            </motion.h2>

            {businesses.map((item, index) => (
                <motion.div
                    key={index}
                    data-aos={item.reverse ? 'fade-left' : 'fade-right'}
                    className={`flex flex-col md:flex-row ${item.reverse ? 'md:flex-row-reverse' : ''} items-center gap-10 bg-white border-4 border-[#F7EEDC] rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300`}
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Image */}
                    <div className="border-4 border-[#F7EEDC] rounded-xl p-2 bg-white shadow-md">
                        <img
                            src={item.img}
                            alt={item.title}
                            className="h-60 w-80 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Text */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h3 className="text-3xl font-bold text-gray-800 mb-3">{item.title}</h3>
                        <p className="text-gray-600 text-lg">{item.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default LocalBusinesses;
