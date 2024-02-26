import { IResponseTrip, ITrip, parseTrip } from "./trip";


export interface IResponseStop {
    gtfsId: string;
    name: string;
    code: string;
    stoptimesWithoutPatterns: IResponseTrip[];
}


export interface IStop {
    gtfsId: string;
    name: string;
    code: string;
    trips: ITrip[];
}

export const isStop = (obj: any): obj is IStop => {
    if (
        "name" in obj && 
        "gtfsId" in obj && 
        "code" in obj && 
        "routes" in obj
    ) {
        return true;
    }
    return false;
}

export const isResponseStop = (obj: any): obj is IResponseStop => {
    if (
        "gtfsId" in obj && 
        "name" in obj && 
        "code" in obj && 
        "stoptimesWithoutPatterns" in obj
    ) {
        return true;
    }
    return false;
}

export const parseStop = (obj: any): IStop | undefined => {
    if (!isResponseStop(obj)) {
        console.error("Incorrect response from query", obj);
        return;
    }

    const departures: IResponseTrip[] = obj.stoptimesWithoutPatterns;
    const trips = departures.map(tripData => {
        return parseTrip(tripData);
    }).filter((trip): trip is ITrip => trip != null);


    // TODO all values are not typechecked
    const stop: IStop = {
        gtfsId: obj.gtfsId,
        name: obj.name,
        code: obj.code,
        trips: trips
    }
    return stop;
}

export default {
    isStop,
    parseStop
}
