import { useEffect } from "react";
import { useDispatch } from "react-redux";

import busService from "./services/busService";
import { setBus } from "./reducers/busReducer";
import { Bus } from "./components/Bus";

import tramService from "./services/tramService";
import { setTram } from "./reducers/tramReducer";
import { Tram } from "./components/Tram";


const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchTripTimes = async () => {
            const busStop = await busService.getTimes();
            const tramStop = await tramService.getTimes();
            dispatch(setBus(busStop));
            dispatch(setTram(tramStop));
        }
        fetchTripTimes();
    }, []);

    return (
        <div className="container">
          <Tram />
          <Bus />
        </div>
    );
}

export default App
