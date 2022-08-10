const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const apiRoutes = require('./routes/apiRoutes');
const { dbConnection } = require('./database/database');

const app = express();

app.set("port", process.env.PORT);
dbConnection();//iniciamos conexión a servidor de bd

///middlewares
app.use(morgan("dev"));
app.use(express.json()) //lectura y parseo del body
app.use(apiRoutes);

module.exports = app;