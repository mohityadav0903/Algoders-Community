import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DropDownElements = () => {
    const [cats, setCats] = useState([]);
    const getCats = async () => {
        const response = await axios.get('https://algo-backend.herokuapp.com/api/categories');
        console.log(response);
        setCats(response.data);
    }
    useEffect(() => {
        getCats();
    },[]);
    return <>
        {cats.map((cat) => (<li key={cat._id}><Link key={cat._id} className="dropdown-item link" to={`/blogs?cat=${cat.name}`}>{cat.name}</Link></li>))}
     </>;
};

export default DropDownElements;
