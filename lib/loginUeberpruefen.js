const users = [
    {
        name: "Letizia Verri",
        password: "Nerone123!"
    },
    {
        name: "Bob",
        password: "Baumeister!"
    },
    {
        name: "Richter",
        password: "Hausarbeit123"
    }
];
const loginHandler = (req, res) => {
    const { name, password } = req.query;


    for(const user of users){
        if (name === user.name && password === user.password) {
            return res.send(`Hallo ${name}, Sie sind angemeldet!`);
        }
    }
    return res.send(`Name bzw. Passwort ist falsch.`);
};

export default loginHandler;