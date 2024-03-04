const baseUrl = "http://localhost:5000";

export const getTimes = async () => {
    const response = await fetch(baseUrl + "/bus");
    const body = await response.json();
    console.debug("Response (bus):", body);

    return body;
}

export default {
    getTimes
}
