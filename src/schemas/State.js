/**
 * @author Guilherme Nogueira <guilhermenogueira90@gmail.com>
 */

const mongoose = require('../db/mongodb')
const Schema = mongoose.Schema

const State = new Schema({
  uf: String,
  sigla_uf: String,
  nome_uf: String
},{
  collection: 'estado',
  versionKey: false
})

module.exports = mongoose.model('State', State)