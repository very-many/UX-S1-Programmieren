import express from "express";
import greetingHandler from "./lib/greeter.js";

import stringVerarbeitungHandler from "./lib/stringVerarbeitung.js";
import rechnenMitZahlenHandler from "./lib/rechnenMitZahlen.js";
import booleanHandler from "./lib/booleanAuswertung.js";
import arbeitenMitArraysHandler from "./lib/arbeitenMitArrays.js";

import zahlenVergleichenHandler from "./lib/zahlenVergleichen.js";
import arrayVergleichHandler from "./lib/arrayVergleich.js";
import komplexerVergleichHandler from "./lib/komplexerVergleich.js";

import loginHandler from "./lib/loginUeberpruefen.js";
import pokemonRouteHandler from "./lib/pokemonRoute.js";
import gleichheitPrüfenHandler from "./lib/gleichheitPrüfen.js";

const server = express();

 /* Initial */
server.get("/", greetingHandler);

/* Aufgaben */
/* Datentypen */
server.get("/string", stringVerarbeitungHandler);
server.get("/rechnen", rechnenMitZahlenHandler);
server.get("/boolean", booleanHandler);
server.get("/array-summe", arbeitenMitArraysHandler);
/* Vergleichsoperatoren */
server.get("/gleichheit-pruefen", gleichheitPrüfenHandler);
server.get("/zahlen-vergleich", zahlenVergleichenHandler);
server.get("/array-vergleich", arrayVergleichHandler);
server.get("/komplexer-vergleich", komplexerVergleichHandler);


server.get("/login", loginHandler);

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
