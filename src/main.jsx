import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import { FontsProvider } from './providers/fonts/FontsProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FontsProvider>
        <App />
      </FontsProvider>
    </BrowserRouter>
  </StrictMode>,
)
