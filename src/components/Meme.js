import React from "react";

export default function Meme() {
    function getMemeImage(){
        
    }

    return (
        <main>
            <div action="" className="form--container">
                <input
                    type="text"
                    className="form--input"
                    placeholder="Shut up"
                />
                <input
                    type="text"
                    className="form--input"
                    placeholder="and take my money"
                />
                <button
                    className="form--btn"
                    onClick={getMemeImage}
                    >
                    Get new meme image 🖼

                </button>
            </div>
        </main>
    )
}