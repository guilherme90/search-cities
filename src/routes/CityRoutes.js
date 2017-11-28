/**
 * @author Guilherme Nogueira <guilhermenogueira90@gmail.com>
 */

const { findAllStates, findCitiesFromUf } = require('../repositories/CityRepository')

/**
 * @param {Router}
 * 
 * @return {core.Router}
 */
module.exports = (router) => {
  /**
   * GET /api/states
   */
  router.get('/states', (request, response) => {
    findAllStates(request.query.search)
      .then(payload => response.status(200).send(payload))
      .catch(error => response.status(404).send(error))
  })

  /**
   * GET /api/states/:ufId/cities
   */
  router.get('/states/:ufId/cities', (request, response) => {
    const ufId = request.params.ufId
    const query = request.query.search

    findCitiesFromUf(ufId, query || [])
      .then(payload => {
        if (payload.length === 0) {
          response.status(404).send(`Oopz! Nenhuma cidade encontrada do estado "${ufId}"`)
        }

        response.status(200).send(payload)
      })
      .catch(error => response.status(400).send(error))
  })

  return router
}