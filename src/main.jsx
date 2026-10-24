// Import React tools needed to run the app
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import new background 
import './index.css';
// Import Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)