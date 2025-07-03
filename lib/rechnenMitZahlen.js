const rechnenMitZahlen = (req, res) => {
    const { a, b } = req.query;

    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
        return res.status(400).json({ error: "Bitte gib zwei gültige Zahlen an (a und b)." });
    }

    return res.json({
        addition: numA + numB,
        subtraction: numA - numB,
        multiplication: numA * numB,
        division: numB !== 0 ? numA / numB : "Division durch 0 nicht möglich"
    });
};

export default rechnenMitZahlen;