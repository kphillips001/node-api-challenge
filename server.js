const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const projectsRouter = require("./routes/projectsRouter");

const server = express()
server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());


server.get('/', (req, res) => {
  res.send('testing')
})

server.use("/api/projects", projectsRouter);

module.exports = server;