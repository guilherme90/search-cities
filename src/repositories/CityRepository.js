/**
 * @author Guilherme Nogueira <guilhermenogueira90@gmail.com>
 */

const { SORT_ASCENDING, SORT_DESCENDING } = require('../filters/constants')
const City = require('../schemas/City')
const State = require('../schemas/State')

const CityRepository = {
  /**
   * @return {Promise}
   */
  findAllStates() {
    return State
      .find({}, { 
        uf: true,
        sigla_uf: true,
        nome_uf: true
      })
      .sort({
        nome_uf: SORT_ASCENDING
      })
  },

  /**
   * @param {Number} ufId 
   * @param {String} query
   * 
   * @return {Promise}
   */
  findCitiesFromUf(ufId, query) {
    if (! Number.isInteger(ufId)) {
      return Promise.reject(`O código "${ufId}" fornecido é inválido!`)
    }

    if (query.length === 1) {
      return Promise.reject('Oops! É necessário informar no mínimo 2 letras para buscar as cidades.')
    }

    if (query.length >= 2) {
      return City
        .find({
          uf: {
            cod_uf: ufId
          },
          nome: {
            $regex: new RegExp(query.toUpperCase().trim()),
            $options: 'i'
          }
        }, {
          nome: true
        })
        .sort({
          nome: SORT_ASCENDING
        })
    }
    
    return City
      .find({
        uf: {
          cod_uf: ufId
        }
      }, {
        nome: true
      })
      .sort({
        nome: SORT_ASCENDING
      })
  }
}

module.exports = CityRepository