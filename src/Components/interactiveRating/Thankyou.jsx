import thanks from './thanks.svg';
  export default function ThankYou({ rating }) {
      return (
        <div className="thank-you">
          <img src={thanks} alt="star" />
          <p id='thanksP'>You selected {rating} out of 5</p>
          <h2>Thank you!</h2>
          <p>We appreciate your feedback!</p>
        </div>
      );
    }
    
    