const booleanHandler = (req, res) => {
    const {number} = req.query;
    if (!isNaN(parseFloat(number))){
        return res.send(
            `${parseFloat(number)} ist ${
                parseFloat(number) > 10 ? "größer" : "nicht größer"
            } als 10.`
        );
    }
    return res.status(400).send(`"${number}" vom Typ "${typeof number}" ist keine gültige Zahl.`);
};

export default booleanHandler;