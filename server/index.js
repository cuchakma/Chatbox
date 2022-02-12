import http from 'http';
import express from 'express';
import logger from 'morgan';
import cors from 'cors';

//routes

//middlewares

const app = express();

const port = process.env.port || '3000';
app.set('port', port);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded9({ extended: false }));
