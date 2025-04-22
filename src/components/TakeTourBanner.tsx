'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TakeTourBanner = () => {
    return (
        <motion.div
            className="w-full h-48 bg-gradient-to-r from-[#FFB6C1] via-[#F7A8B8] to-[#F7EEDC] flex items-center justify-center border-4 border-[#F7EEDC] rounded-xl shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-3">
                    Visit Our Ishwardi
                </h2>
                <p className="text-lg font-semibold">
                    Take the feel of real life, experience the beauty and culture of Ishwardi!
                </p>
            </div>
        </motion.div>
    );
};

export default TakeTourBanner;
