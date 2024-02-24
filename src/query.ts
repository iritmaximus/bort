

const API_KEY: string = "25e625c8546141aa83b21b9ba94d4847";
const API_URL_BASE: string = "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql";
const API_URL: string = `${API_URL_BASE}?digitransit-subscription-key=${API_KEY}`;

export interface IStop {
    id: number;
    name: string;
}


export const queryStop = async (stopId: number): Promise<IStop> => {
    console.log("Querying the HSL-api for stop", stopId);
    console.log(API_URL);

    const query: string = `
      {
        stops(name: "mäkelänrinne") {
          gtfsId
          name
          code
          lat
          lon
        }
      }`

    const response = await fetch(API_URL, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ query })
    });
    const parsed_res = await response.json();
    console.log(parsed_res);




    const stop: IStop = {
        id: stopId,
        name: "TOOO"
    }
    return stop;
};
