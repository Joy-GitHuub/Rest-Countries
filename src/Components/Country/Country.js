import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, capital, population, region, flag } = props.country;
    return (
        <div className='country'>
            <h2>Country Name: {name}</h2>
            <h3>{name} Capital: {capital}</h3>
            <h4>Population: <small>({population})</small> Region: {region}</h4>
            <img className='flag-img' src={flag} alt="" />
            <br />
            <button className="button button1">Details</button>
        </div>
    );
};

export default Country;