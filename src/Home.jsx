// Import a special hook from the router that lets us programmatically click links
import { useNavigate } from 'react-router-dom';

export default function Home() {
  // Create a variable called 'navigate' that we can use to change pages
  const navigate = useNavigate();

  return (
    // Return the visual elements. 'text-center' and 'card' are Bootstrap styles
    <div className="text-center card p-5 shadow-sm">
      <h1>Discover Your Dance Journey</h1>
      <p className="lead mt-3">
        Let's uncover what's holding you back from the dance floor and build a path forward.
      </p>
      
      {/* When this button is clicked, trigger navigate() to send the user to the assessment page */}
      <button 
        className="btn btn-primary btn-lg mt-4"
        onClick={() => navigate('/assessment')}
      >
        Start My Assessment
      </button>
    </div>
  );
}