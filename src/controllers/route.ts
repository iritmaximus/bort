export interface IResponseRoute {
    code: string;
    directionId: number;
    headsign: string;
    route: {
        gtfsId: string;
        shortName: string;
        longName: string;
        mode: string;
    }
}

export interface IRoute {
    gtfsId: string;
    number: string;
    name: string;
    direction: number;
    headsign: string;
    mode: string;
}




export const parseRoute = (obj: IResponseRoute): IRoute | undefined => {
    if (!("route" in obj)) {
        console.error("No route in parsed object");
        return;
    }

    const routeObj = obj.route;
    const gtfsId = routeObj.gtfsId;
    const number = routeObj.shortName;
    const name = routeObj.longName;
    const direction = obj.directionId;
    const headsign = obj.headsign;
    const mode = routeObj.mode;

    const route: IRoute = {
        gtfsId,
        number,
        name,
        direction,
        headsign,
        mode
    }

    return route;
}


export const isRoute = (obj: any): obj is IRoute => {
    if (
        "code" in obj && 
        "number" in obj && 
        "name" in obj && 
        "direction" in obj && 
        "headsign" in obj && 
        "mode" in obj
    ) { 
        return true;
    }
    return false;
}

export default {
    parseRoute,
    isRoute
}
