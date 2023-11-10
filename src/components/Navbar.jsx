import React, { useState } from "react";

const Navbar = ({ setData }) => {
  const [show, setShow] = useState(false);
  const [n, setN] = useState([
    { name: "asus", detail: "msi" },
    { name: "acer", detail: "asus" },
  ]);
  const cliCk = () => {
    alert("login");
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          
            <input type="text" placeholder="username" className="user"/>
            <input type="text" placeholder="password" className="password"/>
            <button onClick={cliCk} type="submit" className=" btn btn-primary">
              Submit
            </button>
          </div>
         
      </nav>
    </>
  );
};

export default Navbar;
