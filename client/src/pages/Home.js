import React, { useContext } from "react";
import DataContext from "../context/DataProvider.js";

export default function Home() {
    const { externalApiData } = useContext(DataContext);

    return (
        <>
            <div className="w-full max-w-5xl p-10 mx-auto my-6 text-center shadow-xl border-t-2 border-slate-700 bg-slate-200">
                <h3 className="uppercase font-semibold text-4xl text-center p-4"> Are you focused today? </h3>
                <hr/>
                <p className="my-2"> Hello there! Welcome to a space created for you. In the day to day, within each and every second of them, we can find ourselves swept away by the constant flood of information we're being fed; This can get overwhelming and eventually cause burnout where we lose our ability to continue. When I started this project, my intention was to create a place where I could keep up with my thoughts in a way that worked for me. I've always struggled with physically writing things down consistently because I have to look for the pencil and pad, writing left-handed I will sometimes smear the ink or graphite, or I'll fill up a notebook and 'Dratz!' I've got to go out and buy another. I am aware these are minimal concerns, but ease is important when the task seems daunting! Although, I find myself sitting down at a computer screen constantly throughout the day and typing things out isn't as much of an issue for my perfectionism. It's worked for me so far. If you've found this little creation, or been led here by another, I imagine that these things may resonate with you. Will you take a moment to look around and give it a go as well? </p>
            </div>
            <div className="w-full max-w-5xl p-10 mx-auto mb-2 my-6 text-center shadow-xl border-t-2 border-slate-700 bg-slate-200">
                <h3 className="uppercase font-semibold text-4xl text-center p-4">
                    {externalApiData.astroPicture.title}
                </h3>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                {
                    /* Create ternerary operator to conditionally render for videos. (Waiting on next video to retrieve format) */
                    console.log(externalApiData.astroPicture.url)
                }
                {/* isVideo ? <ReactPlayer>{astroPicture.url}</ReactPlayer> : <img alt="NASA Astronomy of the Day" src={astroPicture.url}/>*/}
                <img className="w-full h-1/2 mb-2" alt="NASA Astronomy of the Day" src={externalApiData.astroPicture.url}/>
                <hr/>
                <p className="my-2"> <b>Explanation: </b> {externalApiData.astroPicture.explanation} </p>
            </div>
            {/* <div className="inspirational section">
                <img alt="" src={quoteOfTheDay.backgroundImg}/>
                <p className="overlay-quote">{quoteOfTheDay.quote} - <em>{quoteOfTheDay.author}</em></p>
                <span className="overlay-credit" style={{zIndex: 50, fontSize: "0.9em", fontWeight: "bold"}}>
                    <img src="https://theysaidso.com/branding/theysaidso.png" height="20" width="20" alt="theysaidso.com"/>
                    <a href="https://theysaidso.com" title="Powered by quotes from theysaidso.com" style={{color: "#ccc", marginLeft: "4px", verticalAlign: "middle"}}>
                        They Said So®
                    </a>
                </span>
            </div> */}
        </>
    );
};