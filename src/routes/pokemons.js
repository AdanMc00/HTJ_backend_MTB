const express = require('express')
const pokemon = require('../usesCases/pokemons')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const pokemons = await pokemon.getAll()
      res.json({
      success: true,
      message: 'all pokemons',
      data: {
        pokemons
      }
    })
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      })
  }
})
router.get('/primeragen', async (req, res) => {
  try {
    const pokemons = await pokemon.getPokemonsFirst()
    console.log(pokemons)
      res.json({
      success: true,
      message: 'all pokemons',
      data: {
        pokemons
      }
    })
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      })
  }
})
router.post('/',async (request, response) => {
  try {
    const newPokemon = await pokemon.create(request.body)
    response.status(200),
      response.json({
        success: true,
        message: 'Pokemon create',
        data: {
          pokemon: newPokemon
        }
      })
  } catch (error) {
    response.status(400),
      response.json({
        success: false,
        message: error.message
      })
  }
})
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const pokemonFound = await pokemon.getById(id)
    res.json({
      success: true,
      message: 'pokemon by Id',
      data: {
        pokemon: pokemonFound
      }
    })
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      })
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const pokemonDel = await pokemon.deleteById(id)
    res.json({
      success: true,
      message: 'pokemon Delete',
      data: {
        pokemon: pokemonDel
      }
    })
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      })
  }
})
router.patch('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const info = req.body
    const upDatePokemons = await pokemon.updateById(id, info)

    res.json({
      success: true,
      message: 'Changes Done',
      data: {
        pokemon: upDatePokemons
      }
    })
  } catch (error) {
    res.status(400),
      res.json({
        success: false,
        message: error.message
      })
  }
})

module.exports = router