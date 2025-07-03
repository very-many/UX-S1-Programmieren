const fetchPokemonByName = async (name) => {
    if (!name) {
        console.log("[ERROR] - fetchPokemonByName: no name provided");
        return null;
    }

    try {
        console.log(`try fetching data for ${name}...`);

        const pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

        if (pokeResponse.status === 200) {
            const pokeData = await pokeResponse.json();
            return pokeData;
        } else {
            console.log(`no data found for ${name}...`);
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default fetchPokemonByName;
