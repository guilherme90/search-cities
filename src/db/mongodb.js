/**
 * @author Guilherme Nogueira <guilhermenogueira90@gmail.com>
 */

const mongoose = require('mongoose')
const options = {
  useMongoClient: true
}

const __DEV__ = process.env.NODE_ENV === 'development'
let url = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`

mongoose.connection.on('connected', () => console.info('Mongoose default connection open'))
mongoose.connection.on('error', (error) => console.error('Mongoose default connection error: ', error))
mongoose.connection.on('disconnected', () => console.warn('Mongoose default connection disconnected'))
mongoose.connection.on('open', () => console.log('Mongoose default connection is opened'))

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.info('Mongoose default connection disconnected through app termination')
    process.exit(0)
  })
})

if (! __DEV__) {
    url = ''
    options.user = ''
    options.pass = ''
}

mongoose.Promise = global.Promise
mongoose.connect(url, options)

if (__DEV__) {
  mongoose.set('debug', true)
}

module.exports = mongoose;