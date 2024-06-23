
"use client";

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contacts from './Components/Pages/Contacts';
import Navbar from './Components/layout/Navbar';
import PetList from './Components/Pages/PetList';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import NotFound from './Components/Pages/Notfound';
import Addpets from "./Components/Pages/AddPets";
import LoginSignup from "./Components/Pages/LoginSignup";
import Admin from './Components/Pages/AdminSignUp';


function Page() {
    return (
        <Router>
            <div className='page'>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about'component={About} />
                    <Route exact path='/contact'component={Contacts} />
                    <Route exact path='/PetList'component={PetList} />
                    <Route exact path='/Addpets'component={Addpets}/>
                    <Route exact path='/LoginSignup'component={LoginSignup}/>
                    <Route exact path='/AdminSignUp' component={Admin}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    );
};

export default Page;
