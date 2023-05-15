import React from "react";
import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from "../../Components/Sidebar/Sidebar"
import Container from "../../Components/Container/Container"
import "./home.scss";

export default function Home() {
    return (
    <div className="home">
    <div className="top__container">
    <Navbar/>
    </div>
    <div className="bottom__container">
    <Sidebar/>
    <Container/>
    </div>
    {/* <div className="button__container">
        <div className="add__button">
            <AddIcon className="icon"/>
        </div>
    </div> */}
    </div>
    );
}
