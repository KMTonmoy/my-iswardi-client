import React from 'react';

const Map = () => {
    return (
        <div className="w-full py-12 px-4 md:px-20 bg-[#fff9f1]">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-6 border-b-4 border-[#F7EEDC] inline-block">
                Find Us on the Map
            </h2>
            <p className="text-center text-lg text-gray-700 mb-10">
                Explore the beauty of Ishwardi — right here on the map. Visit and feel the real charm of our lovely town in Pabna, Bangladesh.
            </p>

            <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-xl border-4 border-[#F7EEDC]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.9687708560453!2d89.06952447484396!3d24.134419578406998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbb0e92f689dfd%3A0xfed93df1f7b8d4c4!2sIshwardi!5e0!3m2!1sen!2sbd!4v1713779502891!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Map;
