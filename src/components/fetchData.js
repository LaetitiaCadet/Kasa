import React, { useEffect, useState }  from "react";

function FetchData () {
    const [data, setData] = useState([])

    useEffect (() => {
        fetch("../data/data.json")
        .then( res => res.json())
        .then( data => setData(data))
        
    },[data])

    return (
        <div>

        </div>
    )
}

export default FetchData; 

