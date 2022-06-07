import React from "react";
import memesData from "../memesData.js"

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState('')



    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
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
                <img
                    src={memeImage}
                    className="meme--img"
                />
        </main>
    )
}




