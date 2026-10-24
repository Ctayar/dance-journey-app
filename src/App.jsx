// Import the routing tools that let us switch pages without reloading the browser
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import the three screens
import Home from './Home';
import Assessment from './Assessment';
import Curriculum from './Curriculum';

// Define the App component
export default function App() {
  return (
    // <Router> wraps everything so React knows to watch the URL for changes
    <Router>
      {/* className="container" is a Bootstrap rule that centers your app on the screen */}
      <div className="container mt-5">
        
        {/* <Routes> holds all the possible paths a user can visit */}
        <Routes>
          {/* If the URL is "/", show the Home component */}
          <Route path="/" element={<Home />} />
          
          {/* If the URL is "/assessment", show the Assessment component */}
          <Route path="/assessment" element={<Assessment />} />
          
          {/* If the URL is "/curriculum", show the Curriculum component */}
          <Route path="/curriculum" element={<Curriculum />} />
        </Routes>

      </div>
    </Router>
  );
}