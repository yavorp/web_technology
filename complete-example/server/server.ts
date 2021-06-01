import Express, {json}  from 'express';
import * as SocketIo from 'socket.io';
import { handshakeHandler } from './src/socket/user-actions';
import cors from 'cors';
import { validateSocket } from './src/socket/socket-auth-middleware';
import { heroRouter } from './src/hero-router';
import { authRouter } from './src/auth-router';
require('dotenv').config();

const app =  Express();

app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use(json());

const http = require('http').Server(app);
const io: SocketIo.Server = new SocketIo.Server(http, {
  cors: {
    origin: '*'
  }
});

const port = process.env.PORT || 3000;
app.use('auth', authRouter)
app.use('/hero', heroRouter);
http.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// io.use((socket, next) => validateSocket(socket, next));

io.on('connection', (socket) => {
  console.log(io.sockets);
  socket.on('ping', (arg) => {
    handshakeHandler(socket, arg);
  });
  socket.emit('successful connection', 'hello world')
})