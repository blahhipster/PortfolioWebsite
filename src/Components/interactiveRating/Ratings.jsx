import React, { useState } from "react";
import star from './star.svg';
export default function Ratings({ setRating, setIsSubmitted }) {
    const [selectedRating, setSelectedRating] = useState(null); // Track selected button

    const handleRatingClick = (num) => {
        setRating(num);
        setSelectedRating(num); // Update selected rating
    };

    const handleSubmitClick = () => {
        setIsSubmitted(true);
    };

    return (
        <div className="rating">
            <img id="img1" src={star} alt="star" />
            <h2>How did we do?</h2>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className="buttons">
                {[1, 2, 3, 4, 5].map((num) => (
                    <button
                        id="button1"
                        key={num}
                        onClick={() => handleRatingClick(num)}
                        className={selectedRating === num ? "selected" : ""}
                    >
                        {num}
                    </button>
                ))}
            </div>
            <button id="button2" onClick={handleSubmitClick}>Submit</button>
        </div>
    );
}
