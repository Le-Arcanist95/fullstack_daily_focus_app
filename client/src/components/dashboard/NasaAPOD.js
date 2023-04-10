import React, { useContext } from "react";
import DataContext from "../../context/Third-PartyApiProvider.js";

export default function NasaAPOD() {
    const { externalApiData } = useContext(DataContext);

    return (
        <>
            <div className="relative h-full w-full overflow-hidden">
                    <img className="object-cover w-full max-w-md mx-auto -z-10" alt="NASA Astronomy of the Day" src={externalApiData.astroPicture.url}/>
                    <div className="absolute bottom-0 left-0 w-full h-10 text-white">{externalApiData.astroPicture.title}</div>
                </div>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                {
                    /* Create ternerary operator to conditionally render for videos. (Waiting on next video to retrieve format) */
                    console.log(externalApiData.astroPicture.url)
                }
                {/* isVideo ? <ReactPlayer>{astroPicture.url}</ReactPlayer> : <img alt="NASA Astronomy of the Day" src={astroPicture.url}/>*/}
                <hr/>
                <p className="mt-2"> <b>Explanation: </b> {externalApiData.astroPicture.explanation} </p>
        </>
    );
}