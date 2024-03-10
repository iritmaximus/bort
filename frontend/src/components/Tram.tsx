import { useSelector } from "react-redux";

import { IRootState } from "../main";
import { Trip } from "./Trip";


export const Tram = () => {
    const stop = useSelector((state: IRootState) => state.tram);

    const stopName = stop.name === "null" ? "No stop" : stop.name;
    const stopCode = stop.code === "null" ? "?" : stop.code;

    return (
    <div className="item">
        <div>
            <div className="">
                <h1 className="">Tram times</h1>
                <h2 className="">{stopName}: {stopCode}</h2>
            </div>
            { stop.trips.length > 0 && 
                <table className="trips">
                    <thead>
                        <tr>
                            <th>Departure time</th>
                            <th>Line number</th>
                            <th>Line name</th>
                            <th>Time to departure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stop.trips.map(trip => <Trip key={trip.id} trip={trip} />)}
                    </tbody>
                </table>
            }
        </div>
    </div>
    )
}
