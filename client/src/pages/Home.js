import NasaAPOD from "../components/elements/NasaAPOD";
import DigitalClock from "../components/elements/DigitalClock";
import SunWidget from "../components/elements/SunWidget";

export default function Home() {

    return (
        <main className="flex flex-col md:flex-row mx-auto">
            <section id="NasaApod" className="w-1/2 h-1/2 p-10 mx-2 my-4 text-center shadow-2xl border-t-1 border-slate-700 bg-slate-200 rounded-3xl">
               <NasaAPOD/> 
            </section>
            <section id="TimeWidget" className="w-1/2 h-1/2 p-10 mx-2 my-4 text-center shadow-2xl border-t-1 border-slate-700 bg-slate-200 rounded-3xl">
                <SunWidget/>
                <DigitalClock/>
            </section>
        </main>
    );
};