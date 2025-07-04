const arrayVergleich = (req, res) => {
    const { a, b } = req.query;

    if (!a || !b) {
        return res.status(400).json({ error: "Bitte gib zwei Arrays als Query-Parameter 'a' und 'b' an." });
    }

    const arrA = a.split(",");
    const arrB = b.split(",");

    if (arrA.length === 0 || arrB.length === 0) {
        return res.status(400).json({ error: "Beide Arrays müssen mindestens ein Element enthalten." });
    }

    const identical = arrA[0] === arrB[0];

    return res.json({
        firstElementA: arrA[0],
        firstElementB: arrB[0],
        isIdentical: identical
    });
};

export default arrayVergleich;