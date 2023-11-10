import React from "react";
import Navbar from "./components/Navbar";
import Tabel from "./components/Tabel";
import Cards from "./components/Cards";
import { useState } from "react";
function App() {
  const [data, setData] = useState("somphot");
  const show = () => {
    console.log("click");
  };
  return (
    <>
      <Navbar show={show} setData={setData} />
      <hr />
      <Cards
      content={"test"}
      title={"golf"}
      url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj-0P8UE-cZs84uw-gCgiCjw3Y5hPAISN2BN_3HqMwPQ&s"}
      />
      <hr />
      <Tabel data={data} />
      <hr />
       
    </>
  );
}

export default App;
