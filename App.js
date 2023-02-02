import React from 'react';
import logo from './logo.svg';
import './App.css';
import C1129 from './components/C1129';
import C2129 from './components/C2129';
import Navigation from './components/Navigation';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>

            <div id='container'>
                <Navigation/>

                <Routes>
                    <Route exact path="/" element={<C1129/>}/>
                    <Route path="/c2129" element={<C2129/>}/>
                </Routes>

            </div>
        </BrowserRouter>




    );
}

export default App;
