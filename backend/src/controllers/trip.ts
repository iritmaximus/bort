import { IResponseRoute, IRoute, parseRoute } from "./route";


export interface ITrip {
    id: string;
    scheduledDeparture: Date;
    realtimeDeparture: Date;
    depatureDelay: number;
    route: IRoute
}

export interface IResponseTrip {
    scheduledDeparture: number;
    realtimeDeparture: number;
    departureDelay: number;
    trip: {
        id: string;
        tripHeadsign: string;
        route: IResponseRoute;
    }
}

export const parseTrip = (obj: IResponseTrip): ITrip | undefined => {
    const route = parseRoute(obj.trip.route);
    if (!route) {
        console.error("Parsing failed for route", obj);
        return;
    }

    route.headsign = obj.trip.tripHeadsign;

    const trip: ITrip = {
        id: obj.trip.id,
        scheduledDeparture: parseTripTime(obj.scheduledDeparture),
        realtimeDeparture: parseTripTime(obj.realtimeDeparture),
        depatureDelay: obj.departureDelay,
        route: route
    }

    return trip;
}

export const parseTripTime = (time_in_s: number): Date => {
    // TODO It feels like there should be a better way...
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    const minutes = (time_in_s / 60) % 60;
    const hours = time_in_s / 60 / 60;
    const seconds = time_in_s % 60;

    const date = new Date(year, month, day, hours, minutes, seconds);
    console.debug("Raw time", today.toString());
    console.debug("Time:", date);

    return date;
}

const parseTripDelayTime = (time_in_s: number, date: Date): Date => {
    const milliseconds: number = time_in_s * 60000;
    return new Date(date.getTime() - milliseconds);
}
