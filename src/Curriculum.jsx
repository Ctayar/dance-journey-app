import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
export default function Curriculum() {
  // Grab the current location data
  const location = useLocation();
  
  // Extract the userAnswers. The '?' prevents an error if someone visits the page directly without taking the quiz
  const userAnswers = location.state?.userAnswers;

  // API STATE AND EFFECT 
  // 1. Set up state to hold the API data
  const [quote, setQuote] = useState("Loading your daily motivation...");
  const [author, setAuthor] = useState("");

  // 2. Use useEffect to fetch the data when the screen loads
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://dummyjson.com/quotes/random');
        const data = await response.json();
        setQuote(data.quote);
        setAuthor(data.author);
      } catch (error) {
        console.error("Error fetching API data:", error);
        setQuote("Keep dancing, keep smiling!");
      }
    };

    fetchQuote();
  }, []);
  // ----------------------------

  // If there are no answers, show an error message
  if (!userAnswers) {
    return <h3>Sorry! We don't have your data. Please go back.</h3>;
  }

  // If we do have data, render it to the screen. 
  return (
    <motion.div
    className="card p-5 shadow-sm border-success"
    initial ={{ opacity: 0, y: 30}}
    animate={{ opacity: 1, y: 0}}
    transition={{ duration: 0.6, ease: "eastOut" }}
    >
      <h2 className="text-success mb-4">Your Custom Dance Journey</h2>
      
      <p><strong>Your Goal:</strong> {userAnswers.goal}</p>
      <p><strong>Your Biggest Hurdle:</strong> {userAnswers.hurdle}</p>
      
      <hr />
      
      <h4>Instructor Notes:</h4>
      <p>
        {userAnswers.hurdle === 'fear' 
          ? "Your focus this week is mindset. Everyone starts somewhere, and the social floor is a safe place. Take a trusted friend or family member with you!" 
          : "We will focus heavily on timing, body isolation, and step mechanics this week."}
      </p>

      {/*  API QUOTE UI */}
      {/* 3. Display the fetched API data in a styled Bootstrap box */}
      <div className="alert alert-info mt-4 shadow-sm">
        <h5 className="alert-heading">Motivation for your journey:</h5>
        <p className="mb-0 fst-italic">"{quote}"</p>
        {author && <p className="mb-0 text-end fw-bold">- {author}</p>}
      </div>
     

    </motion.div>
  );
}