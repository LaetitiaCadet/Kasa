import React, {useState} from 'react';
import "../Scss/components/_Carousel.scss";


function Carousel ({ id, pictures, title}) {
    const [current, setCurrent] = useState(0);
    const length = pictures.length; 
    const prev = () => {
       const index = current > 0 ? current -1 : length -1
        setCurrent(index)
        console.log(index)
    }

    const next = () => {
        const index = current < length -1 ? current + 1 : 0
        setCurrent(index)
        console.log(index)
    }

    return(
        <div key={id} className="carousel-box">
            {pictures.map((picture, index) => <img className={index === current ? "display-img" : "carousel-img"} src={picture} alt={title}/> )}
            <div className='carousel-controls'>
                <button type="button" className="btn-prev left" onClick={prev}></button>
                <button type="button" className="btn-next right" onClick={next}></button>
            </div>   
        </div>
    )
    
}

export default Carousel 