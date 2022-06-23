import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HerbergementList from "../components/HebergementList";
import Hebergements from "../api/data.json";
import "../Scss/App.scss";


function Home(){
    return (
        <div className="App">
            <header>
            <Nav/>
                <section className="Header-Img-Home">
                    <h1>Chez vous, partout et ailleurs</h1>
                </section>
            </header>
            <ul className="Hebergement">
            {Hebergements.map(({ id, cover, title}) => 
                    <HerbergementList
                        key={id}
                        id={id}
                        cover={cover}
                        title={title}
                    />
                )}
            </ul>           
            <Footer/>
        </div>
    )
}

export default Home;