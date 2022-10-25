import { Container } from 'postcss';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RightSideBar from './RightSideBar';

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