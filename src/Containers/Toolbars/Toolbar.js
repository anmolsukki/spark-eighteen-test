import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../DrawerToggle/DrawerToggleButton';
import './Toolbar.css';

const navbar = (props) => {
  return (
    <header className="toolbar">
        <div className="container">
            <nav className="toolbar__navigation">
                <div className="toolbar_toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div>
                    <Link to="/home" className="nav-option active">
                        LOGO
                    </Link>
                </div>
                <div className="spacer" />
                <div className="toolbar_navigation-items">
                    <ul>{props.navClass.map((item) => {
                        return (
                            <li key={item.link}>
                                <Link to={item.link}
                                className={`nav-option ${item.isSelected === true ? 'active' : ''}`}
                                onClick={() => props.addClass(item)}>
                                    {item.title}
                                </Link>
                            </li>
                        );
                        })}
                    </ul>
                </div>
                </nav>
        </div>
    </header>
  );
};

export default navbar;
