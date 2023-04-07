import React, { useState } from "react";

export default function Journal() {
    const [textAreaContent, setTextAreaContent] = useState("");

    const handleChange = (event) => {
        setTextAreaContent(event.target.value)
        console.log(textAreaContent)
    };

    const downloadTxtFile = () => {
        const date = new Date().toISOString().split('T')[0];
        const downloadName = "journal-entry_" + date;
        const element = document.createElement("a");
        const file = new Blob([textAreaContent], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = downloadName;
        document.body.appendChild(element);
        element.click();
      };

    return (
        <div className="w-11/12 h-full m-auto">
            <h2 className="uppercase font-semibold text-4xl text-center p-4">Journal Page</h2>
            <textarea
                className="resize-none w-full h-60 p-4 border-2 border-gray-300 rounded-lg" 
                placeholder="Write something ..."
                value={textAreaContent}
                onChange={handleChange}
            />
            <button className="inline-block py-3 px-4 rounded-xl text-white uppercase text-2xl tracking-wide transition-all relative overflow-hidden z-10 after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:text-emerald-700 after:-z-20 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-full before:brightness-75 before:transition-all before:-z-10 hover:text-white hover:before:w-full" onClick={downloadTxtFile}> 
                Save & Download?
            </button>
        </div>
    );
};