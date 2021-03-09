

const getDataFromApi = () => {
    return fetch('//rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => { 
            return data.results.map(character => {
                return {
                    id: character.id,
                    name: character.name,
                    species: character.species,
                    image: character.image,
                    status: character.status, 
                    origin: character.origin.name,
                    episode: character.episode.length,
                    gender: character.gender
                };
            });
        });
};

export default getDataFromApi;