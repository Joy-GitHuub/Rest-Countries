import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/all`
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])



    return (
        <div>
            <h1>Total Cuntries: {countries.length}</h1>
            {
                countries.map(country => console.log(country))
            }
            <div className='countries'>
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;