import Banner from '@/components/Banner';
import ContactUs from '@/components/ContactUs';
import FeaturedLocations from '@/components/FeaturedCategories';
import Hotlines from '@/components/Hotlines';
import LocalBusinesses from '@/components/LocalBusinesses';
import Map from '@/components/Map';
import TakeTourBanner from '@/components/TakeTourBanner';
import React from 'react';

const page = () => {
  return (
    <div>
      <div className='px-10 mb-10 mt-10 flex justify-center flex-col gap-10'>
      <Banner />
        <Hotlines />
        <LocalBusinesses />
        <TakeTourBanner />
        <FeaturedLocations />
        <Map/>
        <ContactUs/>
      </div>
    </div>
  );
};

export default page;