import React, { useState } from "react";
import Ratings from "./Ratings";
import ThankYou from "./Thankyou";
import './IR.css';





export default function App(){
    const [rating, setRating] = useState(0);
    const[isSubmitted, setIsSubmitted] = useState(false);

    return(
        <div className="app">
            {!isSubmitted ? (<Ratings setRating={setRating} setIsSubmitted={setIsSubmitted}/>) : (< ThankYou rating={rating}/>)}
        </div>
    );
}

