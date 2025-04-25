import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Webapp from './Masjidil Haram/webapp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Webapp/>
  </StrictMode>,
)
