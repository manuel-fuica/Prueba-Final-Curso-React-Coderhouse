import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Cartwidget from '../cartWidget/cartwidget';
// import logo from '../../assets/img/logo-sushi.png';

const Navbar = () => {
    return (
        <header className='mt-5 container'>
        <div className='row'>
            <div className='contenedor-navbar col-6 text-center justify-content-center'>
                {/* <img src={logo} alt="" className='img-logo'/> */}
                <h1 className='text-white'>LOGO SUSHI</h1>
            </div>
            <div className='col-6'>
                <div className='row'>
                    <ul className='d-flex list-unstyled'>
                        <li className='nav-item me-3'>
                            <a className='nav-link text-white' href='#'>SUSHIS</a>
                        </li>
                        <li className='nav-item me-3'>
                            <a className='nav-link text-white' href='#'>GOHANS</a>
                        </li>
                        <li className='nav-item me-3'>
                            <a className='nav-link text-white' href='#'>SASHIMIS</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link text-white' href='#'>CEVICHES</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link text-white' href='#'>APERITIVOS</a>
                        </li>
                        <Cartwidget />
                    </ul>
                </div>
            </div>
        </div>
        </header>
    )
    }
    
    export default Navbar
