import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SideBar.css';

function SideBar() {
    const [cats, setCats] = useState([]);
    const getCats = async () => {
        const response = await axios.get('http://localhost:5000/api/categories');
        console.log(response);
        setCats(response.data);
    }
    useEffect(() => {
        getCats();
    },[]);
    return <div className='sidebar'>
        <div className="sidebarItem">
            <span className='sidebarTitle'>ABOUT ME</span>
            <img src="https://usercontent1.hubstatic.com/13306390_f520.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, adipisci architecto? Voluptatibus dolore tempora ut perspiciatis quae quia, </p>
        </div>
        <div className="sidebarItem">
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className="sidebarList">
                {cats.map((cat) => (
                    <Link to={`/?cat=${cat.name}`} key={cat._id} className='link'>
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
