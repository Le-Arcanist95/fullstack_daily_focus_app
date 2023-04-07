export default function Tasks() {
    // const [taskNumber, setTaskNumber] = useState(0)
    // // const [taskList, setTaskList] = useState([])

    // function getRandomInt(min, max) {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     let randomInt = Math.floor(Math.random() * (max - min + 1) + min);

    //     return setTaskNumber(randomInt)
    // }

    // update render to use tailwind css
    return (
        <div>
            <section className="w-full max-w-2xl p-10 mx-auto my-6 text-center shadow-md">
                <h2 className="mb-1">Random Task of the Day</h2>
                <p>This idea came from a fellow redditor by the name of 'unigami' while I was scrolling through the self-improvement subreddit one day. The idea is that each task is simple enough to manage yet they push at the edge of your comfort zone to keep you headed in the direction you'd like to be going in. It all adds up, right? Hopefully in the future we'll set this page up for you to put in your own ideas, but for now I hope you'll give it a whirl and maybe it'll help make each day a little more interesting to fight off that nasty stagnation!</p>
            </section>
            <section className="flex w-full max-w-2xl p-10 mx-auto my-4 text-center shadow-md">
                <h4 className="self-center text-lg">Tasklist</h4>
                <ol className="m-8">
                    <li>No internet surfing today</li>
                    <li>Perform a random act of kindness for a stranger</li>
                    <li>Perform a random act of kindness for a family member</li>
                    <li>No junk food today</li>
                    <li>Talk to a stranger</li>
                    <li>Make a piece of art</li>
                    <li>Do something at work that I've been postponing</li>
                    <li>Throw away something</li>
                    <li>Clean something</li>
                    <li>Get 8 hrs of sleep tonight</li>
                    <li>Memorize a quote</li>
                    <li>Do something physical outside</li>
                    <li>Smile often</li>
                    <li>Read something inspirational</li>
                    <li>Practice the guitar</li>
                </ol>
                {/* <p className="random-number"> <b> { taskNumber } </b> </p>
                <button className="number-randomizer" onClick={() => getRandomInt(1, 15)}>Get a random number</button> */}
            </section>
        </div>
    );
};