import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bulma';
import App from './App.tsx'
import "./index.scss";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
