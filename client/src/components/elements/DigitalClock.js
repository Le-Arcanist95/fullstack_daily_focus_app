import { useState, useEffect } from 'react';

function DigitalClock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => setDate(new Date()), 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const gradientColors = `hsl(${hour * 15}, 60%, 50%), hsl(${hour * 15 + 180}, 60%, 50%)`;

    const timeString = `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`;

    return (
        <div
            className="w-full h-full flex justify-center items-center p-4"
            style={{ background: `linear-gradient(135deg, ${gradientColors})` }}
        >
            <div className="text-white text-7xl">{timeString}</div>
        </div>
    );
}

export default DigitalClock;