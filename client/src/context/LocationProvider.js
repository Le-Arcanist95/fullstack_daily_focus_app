import { createContext, useState, useEffect } from 'react';
import { axiosClient } from '../axios.js';

const LocationContext = createContext();

export function LocationProvider({ children }) {
    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0
    });
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await axiosClient.get('https://ipapi.co/json');
                const { latitude, longitude } = response.data;
                setLocation({ latitude, longitude });
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchLocation();
    }, []);

    return (
        <LocationContext.Provider value={{ location, loading }}>
            {children}
        </LocationContext.Provider>
    );
}

export default LocationContext;