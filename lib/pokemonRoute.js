import fetchPokemonByName from "./pokemon.js";

const pokemonRouteHandler = async (req, res) => {
    const { name, cry } = req.query;

    if (!name) {
        return res.status(400).json({ error: "Bitte gib einen Pokemon-Namen an." });
    }

    const pokemonData = await fetchPokemonByName(name.toLowerCase());

    if (pokemonData) {
        if (cry === "true" && pokemonData.cries && pokemonData.cries.latest) {
            return res.json({ cry: pokemonData.cries.latest });
        } else {
            return res.json(pokemonData);
        }
    } else {
        return res.status(404).json({ error: `Pokemon '${name}' wurde nicht gefunden.` });
    }
};

export default pokemonRouteHandler;