import http from 'http';
import express from 'express';
import logger from 'morgan';
import cors from 'cors';

// routes
// import indexRouter from "./routes/index.js";
 import userRouter from "./routes/user";
// import chatRoomRouter from "./routes/chatRoom.js";
// import deleteRouter from "./routes/delete.js";

// middlewares
 import { decode } from './middlewares/jwt.js'

const app = express();

/**
 * Get port from the environment and store in express.
 */
const port = process.env.port || '3000';
app.set('port', port);

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use('/', indexRouter);
// app.use('/users', userRouter);
// app.use('/room', decode, chatRoomRouter);
// app.use('/delete', deleteRouter);

/**
 * Catch 404 and forward to error handler.
 */
// app.use('*', (req, res) => {
//   return res.status(404).json({
//     success: false,
//     message: 'Api endpoint doesnt exists',
//   });
// });

/**
 * Crate HTTP Server.
 */
const server = http.createServer(app);

server.listen(port);

server.on('listening', () => {
  console.log(`Listening on port:: http://localhost:${port}`);
});
