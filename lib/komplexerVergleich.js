const user = {
    name: "Letizia Verri",
    age: 24,
    city: "Mögglingen",
    hobbies: ["Lesen", "Klavier spielen", "Vali mobben", "Kochen"],
    isStudent: true,
    occupation: "UX Designer",
    married: false,
    languages: ["Deutsch", "Englisch", "Spanisch", "Italienisch", "Altgriechisch", "Latein"],
    height: 1.56,
    email: "letizia.verri@studmail.htw-aalen.de",
    hasPet: true,
    favoriteFood: "Lasagne",
    favoriteDesert: "Vali",
    birthday: "2001-02-27T18:35:00.000Z"
}
const booleanHandler = (req, res) => {
    const {hobbyCount} = req.query;
    if (!isNaN(parseFloat(hobbyCount))){
        return res.send(
            `Du hast mit ${parseFloat(hobbyCount)} hobbies ${
                parseFloat(hobbyCount) > user.hobbies.length ? "mehr" : "weniger"
            } hobbies als unsere allseits geliebte Leti.`
        );
    }
    return res.status(400).send(`"${hobbyCount}" vom Typ "${typeof number}" ist keine gültige Zahl.`);
};

export default booleanHandler;