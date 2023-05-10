import React from "react";
import { RiSearchLine } from 'react-icons/ri';
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import './navbar.css';
import Self from '../images/self.jpeg'

class Navbar extends React.Component {


    render() {
        return <div className="nav-container">
            <div className="nav-top-left">
                <a href="/">
                    <img src={Self} className="self-logo" alt="Sabrina" />
                </a>
            </div>

            <div className="nav-bottom-left">
                <Link to="/bootstrap">Bootstrap</Link>
                <Link to="/python">Python</Link>
                <Link to="/tsql">T-Sql/Mysql</Link>
                <Link to="/mysql">PowerOn</Link>
            </div>

            <div className="nav-mid-bottom">

            </div>

            <div className="nav-top-right">
                <Link to="/javascript" >Javascript</Link>
                <Link to="/react">React</Link>
                <Link to="/java" >Java</Link>
                <Link to="/">Home</Link>
            </div>
            <div className="nav-bottom-right">
                <div className="nav-input-container">
                    <input type="text" className="nav-inpt-search" placeholder="Search" />
                    <IconContext.Provider value={{ color: "#282c34" }} >
                        <RiSearchLine className="nav-btn-search-logo" size={20} />
                    </IconContext.Provider>
                </div>
               {/*
                <Link to="/accountinfo" className="nav-btn-icons" >
                    <IconContext.Provider value={{ color: "white" }} >
                        <VscAccount className="nav-btn-account" size={20} />
                    </IconContext.Provider>
                </Link>
                <Link to="/settings" className="nav-btn-icons nav-link-settings" >
                    <IconContext.Provider value={{ color: "white" }} >
                        <HiOutlineCog className="navBtnSettings" size={20} />
                    </IconContext.Provider> 
                </Link>*/}
            </div>
        </div>
    }

}

export default Navbar;