import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SideBar.css';

function SideBar() {
    const [cats, setCats] = useState([]);
    const getCats = async () => {
        const response = await axios.get('https://algo-backend.herokuapp.com/api/categories');
        console.log(response);
        setCats(response.data);
    }
    useEffect(() => {
        getCats();
    },[]);
    return <div className='sidebar'>
       <div className="sidebarItem">
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className="sidebarList">
                {cats.map((cat) => (
                    <Link to={`/blogs?cat=${cat.name}`} key={cat._id} className='link'>
                        <li key={cat._id} className="sidebarListItem">{cat.name}</li>
                         </Link>
                ))}
            </ul>
        </div>
        <div className="sidebarItem">
            <span className='sidebarTitle'>FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook"></i>
            <i className="sidebarIcon fab fa-twitter"></i>
            <i className="sidebarIcon fab fa-pinterest"></i>
            <i className="sidebarIcon fab fa-instagram"></i>
            </div>
        </div>
  </div>;
}

export default SideBar;
