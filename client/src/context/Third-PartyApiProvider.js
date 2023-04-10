import React, { createContext, useState, useEffect } from "react";
import { axiosClient } from "../axios.js";

const ThirdPartyApiContext = createContext();

export function ThirdPartyApiProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [externalApiData, setExternalApiData] = useState({
        astroPicture: {
            title: "",
            explanation: "",
            url: "",
            copyright: ""
        }
    });

    // Get external API data
    useEffect(() => {
        const fetchData = async () => {
            const endpoints = [
                'https://api.nasa.gov/planetary/apod?api_key=YQVratHzp85sqeL2JyuCAMOXJFVhUuXaBLoIvSco'
            ]
            axiosClient.all(endpoints.map((endpoint) => axiosClient.get(endpoint)))
                .then(
                    axiosClient.spread(({data: apod}) => {
                        
                        setExternalApiData(prevData => ({
                            ...prevData,
                            astroPicture: {
                                title: apod.title,
                                explanation: apod.explanation,
                                url: apod.hdurl,
                                copyright: apod.copyright
                            }
                        }));
                    })
                )
                .then(() => setLoading(false));
        };
        
        fetchData();
    }, []);

    return (
        <ThirdPartyApiContext.Provider value={{ externalApiData, loading }}>
            {children}
        </ThirdPartyApiContext.Provider>
    );
}

export default ThirdPartyApiContext;