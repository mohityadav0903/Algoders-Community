import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import { ContextProvider } from './context/Context';
import { SnackbarProvider } from 'notistack';


ReactDOM.render(
    <ContextProvider>
        <BrowserRouter>
            <SnackbarProvider>
                <App />
            </SnackbarProvider>
        </BrowserRouter>
    </ContextProvider>
    ,document.getElementById('root'));



