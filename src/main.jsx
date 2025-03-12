import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Dashboard from './components/Dashboard.jsx'
import { PostProvider } from './context/PostContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostProvider>
      <Dashboard />
    </PostProvider>
  </StrictMode>,
)
