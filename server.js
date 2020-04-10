const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const projectsRouter = require("./routes/projectsRouter");
const actionsRouter = require("./routes/actionsRouter");

const server = express()
server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());


server.get('/', (req, res) => {
  res.send('testing')
})

server.use("/api/projects", projectsRouter);
server.use('/api/actions', actionsRouter);

module.exports = server;