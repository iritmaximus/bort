import { useSelector } from "react-redux";

import { IRootState } from "../main";
import { Trip } from "./Trip";


export const Tram = () => {
    const stop = useSelector((state: IRootState) => state.tram);

    return (
    <div className="item">
        <div>
            <div className="">
                <h1 className="">Tram times</h1>
                <h2 className="">{stop.name}: {stop.code}</h2>
            </div>
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
        </div>
    </div>
    )
}
