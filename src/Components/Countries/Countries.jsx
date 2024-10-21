import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"


const Countries = () => {
    const [countries,setCountries]=useState([])
    const [visitedCountries,setVisitedCountries]=useState([])
    const [countryFlags,setCountryFlags]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])

    const handleVisitedCountry=country=>{
        const newVisitedCountry=[...visitedCountries,country]
        setVisitedCountries(newVisitedCountry)
    }

    const handleFlags=flag=>{
        console.log(flag)
        const newFlags=[...countryFlags,flag.flags.png]
        setCountryFlags(newFlags);
    }



    return (
        <>
            <h3>countries:{countries.length}</h3>
            <div>
                {
                    countryFlags.map((flag,idx)=><img key={idx} src={flag}></img>)
                }
            </div>
            <div>
                <h4>visited countries:{visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country=> <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="countries-container">
            {
                countries.map(country=><Country key={country.cca3} 
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleFlags={handleFlags}
                >
                    
                </Country>)
            }
            </div>
        </>
    );
};

export default Countries;