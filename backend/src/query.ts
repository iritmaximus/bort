import config from "./utils/config";
import { IStop, parseStop } from "./controllers/stop";


const API_URL_BASE: string = "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql";
const API_URL: string = `${API_URL_BASE}?digitransit-subscription-key=${config.API_KEY}`;



const queryDigitransit = async (query: string) => {
    console.info("Querying the HSL-api with query", query);
    console.debug(API_URL);

    const response = await fetch(API_URL, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ query })
    });

    const parsed_res = await response.json();
    return parsed_res.data;
}



export const queryTripsFromStopById = async (stopId: string): Promise<IStop | undefined> => {
    console.debug("Querying the HSL-api for stop", stopId);
    const query: string = `
    {
      stop(id: "${stopId}") {
        gtfsId
        name
        code
          stoptimesWithoutPatterns (numberOfDepartures: 5) {
          scheduledDeparture
          realtimeDeparture
          departureDelay
          trip {
            tripHeadsign
            route {
              gtfsId
              longName
              shortName
              mode
            }
          }
        }
      }  
    }`

    const response = await queryDigitransit(query);
    console.info(response);

    const stop = parseStop(response.stop);
    if (stop) {
        return stop;
    }
    console.error("Parse returned nothing");
    return response;
};

export const queryRoutesAtStopById = async (stopId: string): Promise<IStop | undefined> => {
    console.info("Querying the HSL-api for stop", stopId);
    console.debug(API_URL);

    const query: string = `
    {
      stop(id: "${stopId}") {
        gtfsId
        name
        code
        patterns {
          code
          directionId
          headsign
          route {
            gtfsId
            shortName
            longName
            mode
          }
        }
      }
    }`

    const response = await queryDigitransit(query);
    if (!response) {
      console.error("No response from API");
      return;
    }

    if (!response.stop || !response.stop.patterns) {
      console.error("Incorrect response from API", response);
      return;
    }

    const stop: IStop | undefined = parseStop(response.stop);
    if (stop) {
        console.debug("Parsed stop:", stop);
        return stop;
    }

    console.error("Failed parsing stop", stop);
    return;
};
