import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Information from "../components/Informations";
import Hebergements from "../api/data.json"
import "../Scss/App.scss";

function Accommodation () {
    const searchAccommodation = useLocation().search;
    const idSearch = new URLSearchParams(searchAccommodation).get('id');
    //je récupère le profil du photographe en utilisant la fonction filter qui me permet de comparer si
    // l'id de mon URL correspond à ID du photographe cliquer auparavant sur l'index HTML
    const filterById = Hebergements.filter(hebergement => hebergement.id === idSearch); 
    const filteredHebergements = filterById.map(isHebergement => isHebergement );


    return (
        <div className="App">
            <Nav/>
            <header>
                <div>
                { filteredHebergements.map(({id,pictures,title, description, host, rating, location, equipments,tags}) => 
                    <div key= {id} >
                        <Carousel
                        id={id}
                        pictures= {pictures}
                        title= {title}
                        />
                        <Information
                         id = {id}    
                         title= {title}
                         location={location}
                         tags= {tags}
                         host={host}
                         rating={rating}
                         description= {description}
                         equipments={equipments}
                        />
                    </div>
                )}
                </div>
            </header>

            <Footer/>
        </div>
    )
}

export default Accommodation;