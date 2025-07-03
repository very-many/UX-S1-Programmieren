const greetingHandler = (req, res) => {
    const nameParam = req.query.name || "Jane Doe";
    res.send(`Hallo ${nameParam}`);
};

export default greetingHandler;
