import { IResponseRoute, IRoute, parseRoute } from "./route";


export interface IStop {
    gtfsId: string;
    name: string;
    code: string;
    routes: IRoute[];
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

export const parseStop = (obj: any): IStop | undefined => {
    if (!obj.patterns) {
        console.error("Incorrect query response, no patterns", obj);
        return;
    }
    const patterns: IResponseRoute[] = obj.patterns;
    const routes: IRoute[] = patterns.map(route => {
        return parseRoute(route);
    }).filter((route): route is IRoute => route != null);

    // TODO all values are not typechecked
    const stop: IStop = {
        gtfsId: obj.gtfsId,
        name: obj.name,
        code: obj.code,
        routes: routes
    }
    return stop;
}

export default {
    isStop,
    parseStop
}
