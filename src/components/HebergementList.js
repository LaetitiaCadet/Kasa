import { Link } from "react-router-dom";
import "../Scss/pages/HebergementList.scss";


function DisplayHerbergementList({id, cover, title}){
  return (
      <div>           
            <li key={id}>
                <Link to={`/Accommodation?id=${id}`}>
                <figure>
                    <img className="Cover-Hebergement" src={cover} alt="cover hebergement"/>
                    <figcaption className="Title-Hebergement">{title}</figcaption>
                </figure>
                </Link>
            </li>
      </div>
  )
}


export default DisplayHerbergementList;