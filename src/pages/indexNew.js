import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import LocationModal from '../components/LocationModal';

const Index = () => {
    useEffect(() => {
        const storedLocation = localStorage.getItem('selectedLocation');
        if (storedLocation) {
            navigate(`/${storedLocation}`);
        }
    }, []);

    const handleLocationSelect = (location) => {
        localStorage.setItem('selectedLocation', location);
        navigate(`/${location}`);
    };

    return <LocationModal onSelect={handleLocationSelect} />;
};

export default Index;