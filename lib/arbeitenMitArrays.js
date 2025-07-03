const arraySummeHandler = (req, res) => {
    const zahlen = [3, 7, 12, 5, 9];
    return res.json({
        array: zahlen,
        summe: zahlen.reduce((acc, curr) => acc + curr, 0)
    });
};

export default arraySummeHandler;