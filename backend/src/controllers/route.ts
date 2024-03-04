export interface IResponseRoute {
    id: string;
    gtfsId: string;
    shortName: string;
    longName: string;
    mode: string;
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


export const parseRoute = (obj: IResponseRoute): IRoute | undefined => {
    const id = obj.id;
    const gtfsId = obj.gtfsId;
    const lineNumber = obj.shortName;
    const name = obj.longName;
    const mode = obj.mode;

    const route: IRoute = {
        id,
        gtfsId,
        lineNumber,
        name,
        mode
    }

    return route;
}


export const isRoute = (obj: any): obj is IRoute => {
    if (
        "id" in obj &&
        "code" in obj && 
        "number" in obj && 
        "name" in obj && 
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
