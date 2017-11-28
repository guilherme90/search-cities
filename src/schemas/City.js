/**
 * @author Guilherme Nogueira <guilhermenogueira90@gmail.com>
 */

const mongoose = require('../db/mongodb')
const Schema = mongoose.Schema

const City = new Schema({
  nome: String,
  cod_municipio: String,
  uf: {
    cod_uf: {
      type: String
    }
  }
},{
  collection: 'municipio',
  versionKey: false
})

module.exports = mongoose.model('City', City)