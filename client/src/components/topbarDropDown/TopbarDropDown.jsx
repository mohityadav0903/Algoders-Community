import React from 'react';
import DropDownElements from './DropDownElements';
import { Link } from 'react-router-dom';
import '../topbar/TopBar.css'
const TopbarDropDown = () => {

    return <>
                 <li className="nav-item dropdown topListItem">
          <Link className="nav-link dropdown-toggle link" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                 <DropDownElements />
            </ul>
            </li>
            
        </>;
};

export default TopbarDropDown;
