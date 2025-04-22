'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';

interface Hotline {
    _forId: string;
    title: string;
    image: string;
    description: string;
    phoneNumbers: string[];
}

const DetailsPage: React.FC = () => {
    const params = useParams();
    const id = params.id as string;
    console.log(id);

    const [hotline, setHotline] = useState<Hotline | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHotline = async () => {
            try {
                const res = await fetch('http://localhost:8000/hotline');
                const data: Hotline[] = await res.json();
                const found = data.find(item => item._forId === id);
                setHotline(found || null);
            } catch (err) {
                console.error('Error fetching hotline:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchHotline();
    }, [id]);

    if (loading) {
        return (
            <div className="text-center mt-10 font-semibold text-lg text-blue-600 animate-pulse">
                Fetching hotline details...
            </div>
        );
    }

    if (!hotline) {
        return (
            <div className="text-center mt-10 text-xl font-bold text-red-600">
                No data found for this hotline.
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-[#F7EEDC] via-white to-[#fff] min-h-screen flex items-center justify-center py-12 px-6">
            <div className="p-10 gap-10 flex flex-col md:flex-row items-center  ">
                 <motion.img
                    src={hotline.image}
                    alt={hotline.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1.1 }} 
                    transition={{ duration: 0.8, ease: "easeInOut" }}  
                    className="w-full md:w-1/2 h-[400px] rounded-3xl shadow-2xl border-4 md:mr-10 border-[#1A1A1A] transform"
                />

                 <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="md:w-1/2 space-y-6"
                >
                    <h1 className="text-4xl font-bold text-[#1A1A1A] underline decoration-[#F7EEDC] decoration-wavy">
                        {hotline.title}
                    </h1>

                    <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                        {hotline.description || "No description available for this service."}
                    </p>

                    {/* Phone Numbers */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
                            📞 Contact Numbers
                        </h2>
                        <ul className="space-y-3">
                            {hotline.phoneNumbers.map((phone, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-3 bg-white shadow px-4 py-2 rounded-lg border border-[#F7EEDC]"
                                >
                                    <FaPhoneAlt className="text-green-600" />
                                    <span className="font-medium text-lg">{phone}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default DetailsPage;
