'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { toast } from 'sonner';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            message,
        };

        try {
            const response = await axios.post('http://localhost:8000/inbx', formData);

            if (response.status === 200) {
                toast('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                toast("Failed to send message.");
            }
        } catch (error) {
            toast('Error sending message.');
        }
    };

    return (
        <div className="w-full py-12 px-4 md:px-20 bg-[#fdf7f2]">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6 border-b-4 border-[#F7EEDC] inline-block">
                Contact Us
            </h2>

            <p className="text-center text-lg text-gray-700 mb-10">
                Have any questions or need assistance? We are here to help. Reach out through the form below or check out our FAQs.
            </p>

            <div className='flex flex-col md:flex-row gap-12'>
                {/* Contact Form Section */}
                <div className="w-full mx-auto bg-white shadow-lg rounded-lg p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-lg font-semibold text-gray-800">Name</label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-3 border-2 border-[#F7EEDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7EEDC]"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-lg font-semibold text-gray-800">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border-2 border-[#F7EEDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7EEDC]"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-lg font-semibold text-gray-800">Message</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full p-3 border-2 border-[#F7EEDC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7EEDC]"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="w-full p-3 bg-[#F7EEDC] text-gray-800 font-semibold rounded-md hover:bg-[#F7EEDC] focus:outline-none">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* FAQ Accordion Section */}
                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-semibold text-gray-800 border-b-2 border-[#F7EEDC] py-2">
                                Is it accessible?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 py-2">
                                Yes. The form and accordion follow the WAI-ARIA design pattern to ensure accessibility for all users.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-semibold text-gray-800 border-b-2 border-[#F7EEDC] py-2">
                                Is it styled?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 py-2">
                                Yes. The accordion and form are styled with Tailwind CSS and have a modern, clean design.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg font-semibold text-gray-800 border-b-2 border-[#F7EEDC] py-2">
                                Is it animated?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 py-2">
                                Yes. The accordion has smooth transitions and animations that enhance the user experience.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
