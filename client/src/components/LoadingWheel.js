// Create a loading wheel that will display while the data is being fetched from the API. Cover the page height and width then center the element.

import { useState, useEffect } from 'react';

function LoadingWheel() {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 3000);
    }, []);
    
    return (
        <div
            className="w-full h-full flex justify-center items-center"
            style={{ background: 'rgba(0,0,0,0.5)' }}
        >
            {loading && (
                <div className="w-24 h-24 border-4 border-t-4 border-gray-500 rounded-full animate-spin" />
            )}
        </div>
    );
}

export default LoadingWheel;