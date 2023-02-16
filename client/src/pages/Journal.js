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
        <div className="journal-page">
            <h2 className="journal-title">Journal Page</h2>
            <textarea
                className="journal-textarea" 
                placeholder="Write something ..."
                value={textAreaContent}
                onChange={handleChange}
            />
            <button className="journal-savebtn" onClick={downloadTxtFile}> 
                Save & Download?
            </button>
        </div>
    );
};