import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Home() {
    // NASA Astronomy Picture of the Day
    const [astroPicture, setAstroPicture] = useState({
        title: "",
        explanation: "",
        url: "",
        copyright: ""
    });
    // Quote of the day
    const [quoteOfTheDay, setQuoteOfTheDay] = useState({
        quote: "",
        author: "",
        backgroundImg: "",
        title: ""
    });

    //useEffect for Axios requests
    useEffect(() => {
        const fetchData = async () => {
            const endpoints = [
                'https://api.nasa.gov/planetary/apod?api_key=YQVratHzp85sqeL2JyuCAMOXJFVhUuXaBLoIvSco',
                'https://quotes.rest/qod'
            ]
            Axios.all(endpoints.map((endpoint) => Axios.get(endpoint)))
                .then(
                    Axios.spread(({data: apod}, {data: qod}) => {
                        const astroPicture = apod;
                        const quoteData = qod.contents.quotes[0];
                        
                        setAstroPicture({
                            title: astroPicture.title,
                            explanation: astroPicture.explanation,
                            url: astroPicture.hdurl,
                            copyright: astroPicture.copyright
                        });
                        setQuoteOfTheDay({
                            quote: quoteData.quote,
                            author: quoteData.author,
                            backgroundImg: quoteData.background,
                            title: quoteData.title
                        });
                        console.log({data: apod})
                    })
                );
        };
        
        fetchData();
    }, []);
    return (
        <div className="content-container">
            <div className="introduction section">
                <h3 className="section-title"> Are you focused today? </h3>
                <hr/>
                <p> Hello there! Welcome to a space created for you. In the day to day, within each and every second of them, we can find ourselves swept away by the constant flood of information we're being fed; This can get overwhelming and eventually cause burnout where we lose our ability to continue. When I started this project, my intention was to create a place where I could keep up with my thoughts in a way that worked for me. I've always struggled with physically writing things down consistently because I have to look for the pencil and pad, writing left-handed I will sometimes smear the ink or graphite, or I'll fill up a notebook and 'Dratz!' I've got to go out and buy another. I am aware these are minimal concerns, but ease is important when the task seems daunting! Although, I find myself sitting down at a computer screen constantly throughout the day and typing things out isn't as much of an issue for my perfectionism. It's worked for me so far. If you've found this little creation, or been led here by another, I imagine that these things may resonate with you. Will you take a moment to look around and give it a go as well? </p>
            </div>
            <div className="astronomy-pod section">
                <h3 className="section-title">
                    {astroPicture.title}
                </h3>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                {
                    /* Create ternerary operator to conditionally render for videos. (Waiting on next video to retrieve format) */
                    console.log(astroPicture.url)
                }
                {/* isVideo ? <ReactPlayer>{astroPicture.url}</ReactPlayer> : <img alt="NASA Astronomy of the Day" src={astroPicture.url}/>*/}
                <img alt="NASA Astronomy of the Day" src={astroPicture.url}/>
                <hr/>
                <p> <b>Explanation: </b> {astroPicture.explanation} </p>
            </div>
            <div className="inspirational section">
                <img alt="" src={quoteOfTheDay.backgroundImg}/>
                <p className="overlay-quote">{quoteOfTheDay.quote} - <em>{quoteOfTheDay.author}</em></p>
                <span className="overlay-credit" style={{zIndex: 50, fontSize: "0.9em", fontWeight: "bold"}}>
                    <img src="https://theysaidso.com/branding/theysaidso.png" height="20" width="20" alt="theysaidso.com"/>
                    <a href="https://theysaidso.com" title="Powered by quotes from theysaidso.com" style={{color: "#ccc", marginLeft: "4px", verticalAlign: "middle"}}>
                        They Said So®
                    </a>
                </span>
            </div>
        </div>
    );
};