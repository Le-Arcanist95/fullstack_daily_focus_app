import React, { useState, useEffect, useContext } from 'react';
import LocationContext from '../context/LocationProvider.js';
import LoadingWheel from './LoadingWheel.js';

function SunWidget() {
    const { location, loading } = useContext(LocationContext);
    const [sunrise, setSunrise] = useState(null);
    const [sunset, setSunset] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        fetch(
        `https://api.sunrise-sunset.org/json?lat=${location.latitude}&lng=${location.longitude}&formatted=0`
        )
        .then((response) => response.json())
        .then((data) => {
            setSunrise(new Date(data.results.sunrise));
            setSunset(new Date(data.results.sunset));
        })
        .catch((error) => console.error(error));
    }, [location.latitude, location.longitude]);

    useEffect(() => {
        const timerID = setInterval(() => setCurrentTime(new Date()), 1000);

        return () => {
        clearInterval(timerID);
        };
    }, []);

    let sunLeft = null;
    if (sunrise && sunset) {
        const timeDiff = sunset - sunrise;
        const elapsedTime = currentTime - sunrise;
        if (elapsedTime >= 0 && elapsedTime <= timeDiff) {
            sunLeft = (elapsedTime / timeDiff) * 100;
        }
    }
    
    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <>
            {loading ? <LoadingWheel /> : (
                <div className="flex flex-col items-center border-2 border-black rounded-md mb-2">
                <div className="w-96 h-80 bg-transparent relative flex justify-center items-center p-4">
                    <div className="w-96 h-0 border-t-2 border-blue-400 absolute bottom-0 left-0" />
                    {sunLeft !== null && (
                        <div
                            className="w-10 h-10 rounded-full bg-yellow-400 absolute"
                            style={{ left: `${sunLeft}%`, top: '50%', transform: 'translate(-50%, -50%)' }}
                        />
                    )}
                </div>
                <div className="mt-2 flex justify-between w-96 text-gray-600">
                    {sunrise && <p>{formatTime(sunrise)}</p>}
                    {sunset && <p>{formatTime(sunset)}</p>}
                </div>
                <p className="m-2 font-bold text-gray-600">Sun Position</p>
            </div>
            )}
        </>
    );
}

export default SunWidget;