// TODO make me not copy these from backend

export interface IStop {
    id: string;
    gtfsId: string;
    name: string;
    code: string;
    trips: ITrip[];
}

export interface IRoute {
    id: string;
    gtfsId: string;
    lineNumber: string;
    name: string;
    mode: string;
    direction?: number;
    headsign?: string;
}

export interface ITrip {
    id: string;
    scheduledDeparture: Date;
    realtimeDeparture: Date;
    depatureDelay: number;
    route: IRoute;
    walktime_m?: number;
}
