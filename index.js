/**
 * @author Guilherme Nogueira <guilhermenogueira90@gmail.com>
 */

require('dotenv').load()

const PORT = process.env.NODE_ENV === 'production' 
  ? process.env.PORT 
  : process.env.npm_package_config_port;
  
const express = require('express')
const app = express()
const router = require('express').Router()

/**
 * routes api
 */
app.use('/api', require('./src/routes/CityRoutes')(router))

app.get('*', (request, response) => {
  response.status(200).send({
      success: true,
      message: 'API initialized!'
    })
})

const server = app.listen(PORT, () => {
  const address = server.address()

  console.log("Server started on http://%s:%s", address.address, address.port)
})