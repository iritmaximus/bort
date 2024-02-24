import express from "express";
import { queryStop, IStop } from "./query";


const PORT: Number = 5000;


const api = express();


api.get("/", (_req: express.Request, res: express.Response) => {
    res.send("Moi");
});

api.get("/stops", async (_req, res) => {
    const stop: IStop = await queryStop(10);
    res.send(stop);
});

api.listen(PORT, () => {
    console.log("Server running on port", PORT);
});


