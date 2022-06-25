const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const customerRoutes = require('./routes/customerRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');
const { dbConnection } = require('./database/database');

const app = express();

app.set("port", process.env.PORT);
dbConnection();//iniciamos conexión a servidor de bd

//cors


///middlewares
app.use(morgan("dev"));
app.use(express.json()) //lectura y parseo del body
app.use('/api/customers', customerRoutes);
app.use('/api/categories', categoriesRoutes);

module.exports = app;