import { baseUrl } from "../utils/config";


export const getTimes = async () => {
    const response = await fetch(baseUrl + "/bus");
    console.debug(response);
    const body = await response.json();
    console.debug("Response (bus):", body);

    return body;
}

export default {
    getTimes
}
