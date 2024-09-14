import express, { Request, Response } from "express";

const app = express();

app.get("/", (req:Request, res:Response)=>{
    res.send("Hello World Auttakorn This is second na.");
})

app.listen(5000, ()=>{console.log(`Server run on port:5000`)})