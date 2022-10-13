import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Auth0ProviderWithHistory from './components/auth0'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>
)
