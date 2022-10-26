import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './css/style.css'
const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Sargodha");
    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=matric&appid=db17f3a8298fc6646b909c4aaf8f9597`
            const response = await fetch(url);
            const resJson = await response.json(); //ya jo response mi rh is ko kahe store b krna,,,,like useState mai
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        value={search}
                        className='inputField'
                        onChange={(event) => { setSearch(event.target.value) }}
                    />
                </div>
                {!city ? (
                    <p className='errorMsg'>No Data Founf</p>
                ) : (
                    <>
                        <div className='info'>
                            <h2 className='location'></h2>
                            <i className='fas fa-street-view'></i>{search}
                            <h1 className='temp'>
                                {city.temp}°Cel
                            </h1>
                            <h3 className='tempmin_mix'> {city.temp_min}°Cel | {city.temp_max}°Cel</h3>
                        </div>
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </>
                )}

            </div>
        </>
    )
}

export default Tempapp
