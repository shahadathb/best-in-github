import React from 'react';
import {NavLink} from 'react-router-dom';

let Nav = () => {
    return (
        <ul className="nav">
            <li>
                <NavLink exact activeClassName='active' to='/'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/battle'>
                    Battle
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/popular'>
                    popular
                </NavLink>
            </li>
        </ul>
    );
};
export {Nav};