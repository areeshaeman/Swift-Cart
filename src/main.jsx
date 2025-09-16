import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PersistGate } from 'redux-persist/integration/react';
import {  persistor } from '../src/Store/store.jsx';

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </BrowserRouter>

)
