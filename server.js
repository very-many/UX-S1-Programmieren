import express from "express";

const server = express();

server.get("/", (req, res) => {
    const nameParam = req.query.name || "Jane Doe";
    res.send(`Hallo ${nameParam}`);
});

// Hier die Handler für die Übungsaufgaben in unterschiedlichen
// Routen definieren. Bspw.:
//
// server.get("/aufgabe-1", (req, res) => {...
// server.get("/aufgabe-2", (req, res) => {...
// server.get("/aufgabe-3", (req, res) => {...

server.listen(8000, () => {
    console.log("Server is running...");
});
