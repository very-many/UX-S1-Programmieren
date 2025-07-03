import express from "express";
import greetingHandler from "./lib/greeter.js";

const server = express();

server.get("/", greetingHandler);

// Hier die Handler für die Übungsaufgaben in unterschiedlichen
// Routen definieren. Bspw.:
//
// server.get("/aufgabe-1", handlerOne);
// server.get("/aufgabe-2", handlerTwo);
// server.get("/aufgabe-3", handlerThree);

server.listen(8000, () => {
    console.log("Server is running...");
});
