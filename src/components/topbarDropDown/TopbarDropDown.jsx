import React from 'react';
import DropDownElements from './DropDownElements';
import { Link } from 'react-router-dom';
import '../topbar/TopBar.css'
const TopbarDropDown = () => {

    return <>
                 {/* <li className="nav-item dropdown topListItem fw-bold ">
          <Link className="nav-link dropdown-toggle link text-white" to="/blogs" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                 <DropDownElements />
            </ul>
            </li> */}
            <ul class="nav justify-content-center py-3 text-white">

   <DropDownElements />
            </ul>
        </>;
};

export default TopbarDropDown;
