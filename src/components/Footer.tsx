'use client'
import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <div className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Explore Ishwardi */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Explore Ishwardi</h4>
                        <ul>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Tourist Attractions</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Local Culture</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Events & Festivals</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Best Restaurants</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                        <p className="text-gray-400">Phone: 01731158705</p>
                        <p className="text-gray-400">Email: contact@myishwardi.com</p>
                        <p className="text-gray-400">Address: Ishwardi, Pabna, Bangladesh</p>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <motion.a
                                href="https://www.facebook.com/groups/1097673544768970"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition duration-200"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaFacebookF />
                            </motion.a>
                            <motion.a
                                href="https://www.youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition duration-200"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaYoutube />
                            </motion.a>
                            <motion.a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition duration-200"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaInstagram />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition duration-200"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaLinkedinIn />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="bg-gray-800 py-4 text-center">
                <p className="text-gray-400 text-sm">2024 to © {new Date().getFullYear()} My Ishwardi. All rights reserved. Designed with ❤️ by Tonmoy.</p>
            </div>
        </div>
    );
};

export default Footer;
