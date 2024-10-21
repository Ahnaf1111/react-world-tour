import { useState } from "react";
import "./Country.css"
const Country = ({country,handleVisitedCountry,handleFlags}) => {
    const {currencies,population}=country;
    const [visited,setVisited] =useState(false)
    const handleVisited =()=>{
        setVisited(!visited)
    }

    
    return (
        <div className={`country ${visited&&'visited'}`}>
            <p>name:{country.name.common}</p>
            <img src={`${country.flags.png}`} alt="" />
            <p>ShortTAG:{country.cca3}</p>
            <p>Currency:{currencies?.XCD?.name}</p>
            <p>population:{population}</p>
            <button onClick={()=>handleVisitedCountry(country)}>Visited Country</button>
            <button onClick={handleVisited}>{visited?'i have visited': 'wanted to go'}</button>
            <button onClick={()=>handleFlags(country)}>add flag</button>
        </div>
    );


};

export default Country;