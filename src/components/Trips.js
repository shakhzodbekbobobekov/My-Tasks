import React, { useState, useEffect, useCallback } from "react";
import './TripsList.css'

export default function TripsList() {

    const [ trips, setTrips ] = useState([])
    const [ url, setUrl ] = useState('http://localhost:3000/trips')

    const fetchTrips = useCallback(async () => {
        const res = await fetch(url)
        const data = await res.json()
        setTrips(data)
    }, [url])

    useEffect(() => {
        fetchTrips()
    }, [fetchTrips] )
   


    return (
        <div className="trip-list">
            <ul>
                {
                    trips.map((trip) => {
                        return (
                            <li key={trip.id}> 
                                <h1>{ trip.title }</h1>
                                <p>{ trip.price }</p>
                            </li>
                        )
                    })
                }
            </ul>
            
            <div className="filters">
                <button onClick={()=> {setUrl('http://localhost:3000/trips')}} >All Trips</button>
                <button onClick={()=> {setUrl('http://localhost:3000/trips?loc=europa')}} >Yeeevro Trips</button>
            </div>

        </div>
    )


}