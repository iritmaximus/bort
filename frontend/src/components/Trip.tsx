import { useState, useEffect } from "react";
import { ITrip } from "../types/api-interfaces";


interface TripProps {
    trip: ITrip;
}


export const Trip = ({ trip }: TripProps) => {
    const [departureFromNow, setDepartureFromNow] = useState(0)

    const name = trip.route.headsign;
    const lineNumber = trip.route.lineNumber;

    const departure = new Date(trip.realtimeDeparture)
    const departureHour = departure.getHours();
    const minutes = departure.getMinutes();
    const departureMinute = minutes > 9 ? minutes : "0" + minutes;

    const walktime_m = trip.walktime_m ? trip.walktime_m : 0;
    useEffect(() => {
        setDepartureFromNow(Math.round((departure.getTime() - Date.now()) / 60_000));
    }, []);

    setInterval(() => {
        setDepartureFromNow(Math.round((departure.getTime() - Date.now()) / 60_000));
    }, 5000);



    return (
        <tr className="trip">
            <td className="trip-item trip-time">{departureHour}.{departureMinute}</td>
            <td className="trip-item trip-line">{lineNumber}</td>
            <td className="trip-item trip-name">{name}</td>
            <td className="trip-item trip-departure-offset">{departureFromNow} min.</td>
        </tr>
    );
}


export default {
    Trip
}
