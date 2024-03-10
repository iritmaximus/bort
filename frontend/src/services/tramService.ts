import { baseUrl } from "../utils/config";


export const getTimes = async () => {
    const response = await fetch(baseUrl + "/tram");
    const body = await response.json();
    console.debug("Response (tram):", body);

    return body;
}

export default {
    getTimes
}
