import React from "react";
import "./index.scss"
import Header from "./03_components/header/header.jsx";
import { Routes, Route } from "react-router-dom";
import MainPage from "./01_pages/mainPage/mainPage.jsx";
import { useSelector } from "react-redux";
import Modal from "./03_components/modal/modal";



// import { Link } from "react-router-dom";

function App() {
  const customer = useSelector((state)=> state.customer.value);
  const furnitureLinks = [
     {
       id: 0,
       name: "Стулья",
       link: "/furniture/chairs"
     },
     {
      id: 1,
      name: "Диваны",
      link: "/furniture/sofas"
    },
    {
      id: 2,
      name: "Столы",
      link: "/furniture/tables"
    }
  ]

  const electricLinks = [
    {
      id: 0,
      name: "sdfsd",
      link: "/electrical/ss"
    },

 ]

  return (
    <div className="wrapper">
        <Modal />
        <Header />
          <Routes>
            <Route path="/" element={ <MainPage products={[]} links={[]} /> } />
            <Route path="/electrical" element={ <MainPage products={[]} links={electricLinks} /> } />
            <Route path="/electrical/*" element={ <MainPage products={[]} links={electricLinks} /> } />
            <Route path="/furniture" element={ <MainPage products={furnitureLinks} links={furnitureLinks} /> } />
            <Route path="/furniture/chairs" element={ <MainPage products={furnitureLinks} links={furnitureLinks} /> } />
            <Route path="/furniture/sofas" element={ <MainPage products={[]} links={furnitureLinks} /> } />
            <Route path="/furniture/tables" element={ <MainPage products={[]} links={furnitureLinks} /> } />
            <Route path="*" element={ <MainPage links={[]}/> } />
          </Routes>
        
    </div>
  );
}

export default App;
