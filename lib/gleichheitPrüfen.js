const gleichheitPrüfen = (req, res) => {
    const { a, b } = req.query;

    if (!a || !b) {
        return res.status(400).json({ error: "Bitte gib zwei Texte ein." });
    }

    return res.send(a === b
        ? `Die Texte "${a}" und "${b}" sind gleich.`
        : `Die Texte "${a}" und "${b}" sind nicht gleich.`);
};

export default gleichheitPrüfen;