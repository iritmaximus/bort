import express from "express";
import cors from "cors";

import { queryTripsFromStopById } from "./query";


const PORT: number = 5000;


const api = express();

api.use(cors());


api.get("/", (_req: express.Request, res: express.Response) => {
    res.send("Moi");
});

api.get("/bus", async (_req, res) => {
    const busStop = await queryTripsFromStopById("HSL:1220106");
    if (busStop) {
        res.send(busStop);
        return;
    }
    res.send({"message": "No stops found"});
    return;
});

api.get("/tram", async (_req, res) => {
    const tramStop = await queryTripsFromStopById("HSL:1220419");
    if (tramStop) {
        res.send(tramStop);
        return;
    }
    res.send({"message": "No stops found"});
    return;
});

api.listen(PORT, () => {
    console.log("Server running on port", PORT);
});


