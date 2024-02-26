import "dotenv/config";


if (process.env.API_KEY == undefined) {
    console.error("FATAL ERROR: API_KEY not set");
    process.exit(1);
}

export const API_KEY = process.env.API_KEY;


export default { API_KEY };
