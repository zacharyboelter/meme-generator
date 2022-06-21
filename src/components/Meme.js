import React from "react";
import memesData from "../memesData.js"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)



    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: url
            }
        })
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
                    src={meme.randomImage}
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

// import React from 'react';
// import ReactDOM from 'react-dom';

// function App() {
//     /**
//      * Challenge: Convert the code below to use an array
//      * held in state instead of a local variable. Initialize 
//      * the state array with the same 2 items below
//      * 
//      * Don't worry about fixing `addItem` quite yet.
//      */
//     const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
//     function addItem() {
//         // We'll work on this next
//         setThingsArray(prevThingsArray => {
//             return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
//         })
//     }
    
//     const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
//     return (
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             {thingsElements}
//         </div>
//     )
// }

// ReactDOM.render(<App />, document.getElementById('root'));


// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (719) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: false
//     })


// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (719) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: true
//     })
    /**
     * Challenge: Use a ternary to determine which star image filename
     * should be used based on the `contact.isFavorite` property
     * 
     * `true` => "star-filled.png"
     * `false` => "star-empty.png"
     */
    
//     let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
    // how to change one thing in the object without retyping everything.
    // function toggleFavorite() {
    //     setContact(prevState => {
    //         return {
    //             ...prevState,
    //             isFavorite: !prevState.isFavorite
    //         }
    //     })
    // }
    
//     return (
//         <main>
//             <article className="card">
//                 <img src="./images/user.png" className="card--image" />
//                 <div className="card--info">
//                     <img 
//                         src={`../images/${starIcon}`} 
//                         className="card--favorite"
//                         onClick={toggleFavorite}
//                     />
//                     <h2 className="card--name">
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="card--contact">{contact.phone}</p>
//                     <p className="card--contact">{contact.email}</p>
//                 </div>
                
//             </article>
//         </main>
//     )
// }


// export default function App() {
//     const [squares, setSquares] = React.useState(boxes)

// function toggle(id) {
//     setSquares(prevSquares => {
//         return prevSquares.map((square) => {
//             return square.id === id ? {...square, on: !square.on} : square
//         })
//     })
// }
    
//     const squareElements = squares.map(square => (
//         <Box 
//             key={square.id}
//             on={square.on}
//         />
//     ))
    /**
// import React from 'react'

import React from "react"

export default function Box(props) {
   
    
    const styles = {
        backgroundColor: flip ? "#222222" : "transparent"
    }
    
    return (
        <div style={styles} 
        className="box" 
        onClick={()=>props.toggle(props.id)}
        >
        </div>
    })
}

import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(["a"])
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there are > 0 unread messages, display "You have <n> unread
     *   message(s)"
     *      - If there's exactly 1 unread message, it should read "message"
     *        (singular)
     */
//      return (
//         <div>
//             {
//                 messages.length === 0 ?
//                 <h1>You're all caught up!</h1> :
//                 <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}</h1>
//             }
//         </div>
//     )
// }

// import React from "react"

// export default function Form() {
//     const [firstName, setFirstName] = React.useState("")
    
//     console.log(firstName)
    
//     function handleChange(event) {
//         setFirstName(event.target.value)
//     }
    
//     return (
//         <form>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//             />
//         </form>
//     )
// }

// set state as an object
// import React from "react"

// export default function Form() {
//     const [formData, setFormData] = React.useState(
//         {firstName: "", lastName: ""}
//     )
    
//     console.log(formData)
    
//     function handleChange(event) {
//         setFormData(prevFormData => {
//             return {
//                 ...prevFormData,
//                 [event.target.name]: event.target.value
//             }
//         })
//     }
    
//     return (
//         <form>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//                 name="firstName"
//             />
//             <input
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={handleChange}
//                 name="lastName"
//             />
//         </form>
//     )
// }