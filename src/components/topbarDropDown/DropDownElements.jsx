import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

const DropDownElements = () => {
  const [cats, setCats] = useState([]);
  const [exec, setExec] = useState(false);

  const getCats = async () => {
    const response = await axios.get(
      "https://algo-backend.herokuapp.com/api/categories"
    );
    console.log(response);
    setCats(response.data);
    setExec(true);
  };
  useEffect(() => {
    getCats();
  }, []);
  return (
    <>
      {exec ? (
        cats.map((cat) => (
          <li key={cat._id}>
            <Link
              key={cat._id}
              className="dropdown-item link"
              to={`/blogs?cat=${cat.name}`}
            >
              {cat.name}
            </Link>
          </li>
        ))
      ) : (
        <div className="puffLoader">
          <ThreeDots
            color="#2D81F7"
            height={40}
            width={40}
            className="loader"
          />
        </div>
      )}
    </>
  );
};

export default DropDownElements;
