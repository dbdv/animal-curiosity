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
                <Route exact path='https://dbdv.github.io/animal-curiosity/' element={<DailyFact/>}/>
                <Route exact path='https://dbdv.github.io/animal-curiosity/about-us' element={<AboutUs/>}/>
                <Route exact path='https://dbdv.github.io/animal-curiosity/gallery' element={<Gallery/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </Router>
    )
}

export default App;