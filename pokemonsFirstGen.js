const axios = require('axios')

async function getPokemonsFG(url) {
  try {
    const response = await axios.get(url);
    let pokemons = response.data
    const { name, abilities, sprites, id, stats, types } = pokemons
    const pokemonData = { name }
    console.log(pokemonData)
    return pokemonData
  } catch (error) {
    console.error(error);
  }
}
async function getPokemons () {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
    let pokemonsFirstGen = response.data.results
    const getData = pokemonsFirstGen.map(item => {
      let url = item.url
        dataFirstGen =  getPokemonsFG(url)
      return dataFirstGen
    })
    console.log(getData)
    return getData
  } catch (error) {
    console.error(error)
  }
}

module.exports = { getPokemons }





