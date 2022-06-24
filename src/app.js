import express from 'express';
import morgan from 'morgan';
import customerRoutes from './routes/customerRoutes';
import categoriesRoutes from './routes/categoriesRoutes';
const { dbConnection } = require('./database/database');

const app = express();

app.set("port", 5000);
dbConnection();//iniciamos conexión a servidor de bd

//cors


///middlewares
app.use(morgan("dev"));
app.use(express.json()) //lectura y parseo del body
app.use('/api/customers', customerRoutes);
app.use('/api/categories', categoriesRoutes);

export default app;