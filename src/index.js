import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import { ContextProvider } from './context/Context';


ReactDOM.render(<ContextProvider><BrowserRouter><App /></BrowserRouter></ContextProvider>,document.getElementById('root'));



