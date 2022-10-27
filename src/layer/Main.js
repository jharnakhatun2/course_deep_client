import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <Outlet></Outlet>   
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;