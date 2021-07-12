import React from 'react';
import { BsGear, BsX } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function NavBar({ notify }) {
    return (
        <div className="wrapper">
            <nav className="navbar">
                <div className="logo">
                    <h4>Publish</h4>
                    <span>{notify}</span>
                </div>
                <div className="icons">
                    <IconContext.Provider value={{ className: 'react-icons' }}>
                        <BsGear />
                        <BsX />
                    </IconContext.Provider>
                </div>
            </nav>
        </div>
    )
}