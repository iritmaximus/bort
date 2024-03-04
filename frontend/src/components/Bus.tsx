import { useSelector } from "react-redux";

import { IRootState } from "../main";
import { Trip } from "./Trip";


export const Bus = () => {
    const stop = useSelector((state: IRootState) => state.bus);

    return (
    <div className="item">
        <div>
            <div className="">
                <h1 className="">Bus times</h1>
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
