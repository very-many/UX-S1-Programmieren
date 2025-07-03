import express from "express";
import greetingHandler from "./lib/greeter.js";

import stringVerarbeitungHandler from "./lib/stringVerarbeitung.js";
import rechnenMitZahlenHandler from "./lib/rechnenMitZahlen.js";
import booleanHandler from "./lib/booleanAuswertung.js";
import arbeitenMitArraysHandler from "./lib/arbeitenMitArrays.js";

import loginHandler from "./lib/loginUeberpruefen.js";
import komplexerVergleichHandler from "./lib/komplexerVergleich.js";
import pokemonRouteHandler from "./lib/pokemonRoute.js";

const server = express();

 /* Initial */
server.get("/", greetingHandler);

/* Aufgaben */
/* Datentypen */
server.get("/string", stringVerarbeitungHandler);
server.get("/rechnen", rechnenMitZahlenHandler);
server.get("/boolean", booleanHandler);
server.get("/array-summe", arbeitenMitArraysHandler);

server.get("/login", loginHandler);
server.get("/komplexer-vergleich", komplexerVergleichHandler);

/* Bonus Aufgaben */
server.get("/pokemon", pokemonRouteHandler);


// Hier die Handler für die Übungsaufgaben in unterschiedlichen
// Routen definieren. Bspw.:
//
// server.get("/aufgabe-1", handlerOne);
// server.get("/aufgabe-2", handlerTwo);
// server.get("/aufgabe-3", handlerThree);

server.listen(8000, () => {
    console.log("Server is running...");
});
