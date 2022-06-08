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
            <div className="img--container">
                <img
                    src={memeImage}
                    className="meme--img"
                />
            </div>
        </main>
    )
}







// import React from "react"

// export default function App() {
// //    example of how to flip to opposite boolean
//     const [isGoingOut, setIsGoingOut] = React.useState(true) 
    
//     function flip(){
//          setIsGoingOut(function(prevIsGoingOut){
//         return !prevIsGoingOut
//     })
//     }
   
       
//     return (
//         <div className="state">
//             <h1 className="state--title">Do I feel like going out tonight?</h1>
//             <div className="state--value" onClick={flip}>
//                 <h1 >{isGoingOut ? "Yassss" : "Noaarr"}</h1>
//             </div>
//         </div>
//     )
// }
