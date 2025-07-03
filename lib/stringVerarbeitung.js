const stringVerarbeitung = (req, res) => {
    const { text } = req.query;

    if (!text) {
        return res.status(400).json({ error: "Bitte gib einen Text an." });
    }

    return res.json({
        length: text.length,
        first: text[0],
        last: text[text.length - 1]
    });
};

export default stringVerarbeitung;