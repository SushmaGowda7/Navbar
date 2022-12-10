import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {useState} from "react";
import '../style/TopNav.css';

const TopNav = () => {
    const menuData = [
        {
            path:'/',
            name: "Home"
        },
        {
            path:'/about',
            name: "About"
        },
        {
            path:'/contact',
            name: "Contact"
        },
        {
            path:'/service',
            name: "Service"
        },
        {
            path:'/other',
            name: "Other"
        }
    ]

    const [isOpen, setIsOpen] = useState(false);
    const toggle = ()=> setIsOpen(!isOpen);
    
    return (
        <nav>
            <label  className="logo">Navbar</label>
            <div className="bars">
                <FaBars onClick={toggle}/>
            </div>
            <div className="menu" style={{left: isOpen ? "-100%" : "0"}}>
                {
                    menuData.map((item)=>(
                        <NavLink to={item.path} key={item.name}>
                            <div className="list_item">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
        </nav>
    );
};

export default TopNav;