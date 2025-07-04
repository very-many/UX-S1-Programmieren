const zahlenVergleichen = (req, res) => {
    const {number} = req.query;
    if (!isNaN(parseFloat(number))){
        return res.send(
            `${parseFloat(number)} ist ${
                parseFloat(number) > 100 ? "größer als" : (parseFloat(number) < 100 ? "kleiner als" : "gleich gross wie")
            } 100.`
        );
    }
    return res.status(400).send(`"${number}" vom Typ "${typeof number}" ist keine gültige Zahl.`);
};

export default zahlenVergleichen;