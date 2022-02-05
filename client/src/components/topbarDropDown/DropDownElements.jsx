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
        {cats.map((cat) => (<li key={cat._id}><Link key={cat._id} className="dropdown-item link" to={`/?cat=${cat.name}`}>{cat.name}</Link></li>))}
                  {/* <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li> */}
  </>;
};

export default DropDownElements;
