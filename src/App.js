import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import NotFound from './NotFound';
import DailyFact from './DailyFact';
import Gallery from './Gallery';

function App(){
    return (
        <Router>
            <Routes>
                <Route path='/' element={<DailyFact/>}/>
                <Route path='/about-us' element={<AboutUs/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </Router>
    )
}

export default App;