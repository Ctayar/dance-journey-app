// Import 'useLocation' which allows us to catch the secret data sent by the navigate function
import { useLocation } from 'react-router-dom';

export default function Curriculum() {
  // Grab the current location data
  const location = useLocation();
  
  // Extract the userAnswers. The '?' prevents an error if someone visits this page directly without taking the quiz
  const userAnswers = location.state?.userAnswers;

  // If there are no answers, show an error message
  if (!userAnswers) {
    return <h3>Oops! We don't have your data. Please go back.</h3>;
  }

  // If we do have data, render it to the screen. 
  // We use curly braces {} to inject the JavaScript variables right into the HTML.
  return (
    <div className="card p-5 shadow-sm border-success">
      <h2 className="text-success mb-4">Your Custom Dance Journey</h2>
      
      <p><strong>Your Goal:</strong> {userAnswers.goal}</p>
      <p><strong>Your Biggest Hurdle:</strong> {userAnswers.hurdle}</p>
      
      <hr />
      
      <h4>Instructor Notes:</h4>
      {/* We can use a simple ternary operator (condition ? true : false) to show specific text based on their answers */}
      <p>
        {userAnswers.hurdle === 'fear' 
          ? "Your focus this week is mindset. Everyone starts somewhere, and the social floor is a safe place!" 
          : "We will focus heavily on timing, body isolation, and step mechanics this week."}
      </p>
    </div>
  );
}