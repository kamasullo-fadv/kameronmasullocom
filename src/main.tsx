import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>,
)
