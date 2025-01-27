import React from 'react'
import Form1 from './Form1';
import Translator from './Translator';
import { Link, Route, BrowserRouter as Router,Routes } from 'react-router-dom';

const Tabs = () => {
    return (
        <div>
            <Router>
                <Link to="/Form1" className='p-2 fs-3' >Form1</Link>
                <Link to="/Translator" className='p-2 fs-1'>Translator</Link>
                <Routes>
                    <Route path='/Form1' element={<Form1/>}/>
                    <Route path='/Translator' element={<Translator/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default Tabs
