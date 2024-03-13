import React from "react";
import { Link } from "react-router-dom";
import useUser from "../filters/useUser"

const Header = () => {
  const {data, isLoading, error,fetchAgain} = useUser();
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <ul className="header-list red" title="Use Effect">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="header-list green" title="Use Query">
          <li>
            <Link to="/home1">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="header-list orange" title="Use custom hook">
          <li>
            <Link to="/home2">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button onClick={fetchAgain}>Refecth</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
