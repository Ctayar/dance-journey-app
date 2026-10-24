// Import 'useState', which acts as React's memory to remember what the user types
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Assessment() {
  const navigate = useNavigate();
  
  // Set up the state memory. 'answers' holds the data, 'setAnswers' is the function to update it
  // It starts as an object with empty strings
  const [answers, setAnswers] = useState({
    goal: '',
    hurdle: ''
  });

  // This function runs every time the user selects a new dropdown option
  const handleChange = (event) => {
    // It copies the existing answers (...answers), finds the name of the dropdown they changed, and updates it with their new value
    setAnswers({ ...answers, [event.target.name]: event.target.value });
  };

  // This function runs when they click the Submit button
  const handleSubmit = (event) => {
    // Prevent the browser from refreshing the page (default form behavior)
    event.preventDefault();
    // Move to the curriculum page, and secretly carry the 'answers' data along in the background
    navigate('/curriculum', { state: { userAnswers: answers } });
  };

  return (
    <div className="card p-4 shadow-sm">
      <h2>Let's dig a little deeper</h2>
      
      {/* A form that runs handleSubmit when the button inside is clicked */}
      <form onSubmit={handleSubmit} className="mt-4">
        
        <div className="mb-4">
          <label>What is your primary goal?</label>
          {/* The 'name' attribute here MUST match the exact spelling in our useState memory above */}
          <select name="goal" className="form-select" onChange={handleChange} required>
            <option value="">Select an option...</option>
            <option value="social">To socialize and connect</option>
            <option value="fitness">For fitness</option>
          </select>
        </div>

        <div className="mb-4">
          <label>What stops you from dancing?</label>
          <select name="hurdle" className="form-select" onChange={handleChange} required>
            <option value="">Select an option...</option>
            <option value="fear">Fear of looking foolish</option>
            <option value="technique">I lack the foundational technique</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success">Get My Package</button>
      </form>
    </div>
  );
}