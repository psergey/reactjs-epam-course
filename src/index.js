import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import App from './components/App'

//ReactDOM.render(<App></App>, document.getElementById('root'));
const root = createRoot(document.getElementById('root'))
root.render(<App />)