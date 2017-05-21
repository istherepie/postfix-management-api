'use strict'

// Modules
const restify = require('restify')

// Constants
const port = process.env.SERVER_PORT || 3000
const server = restify.createServer()

// Middleware
server.use(restify.bodyParser())

// Routes
server.get('/', (req, res, next) => {
	res.json({ hello: 'world' })
})

// Error Handling
server.on('uncaughtException', (req, res, route, err) => {
    log.error(err.stack)
    res.send(err)
})

server.listen(port, function() {
  console.log('Server is fully armed and operational on port: %s', port)
})