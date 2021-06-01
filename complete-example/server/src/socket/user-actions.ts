import * as SocketIo from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

// const idUserMap

// const room = socke

export function handshakeHandler(socket: SocketIo.Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>, args :string) {
  console.log(socket.id);
  // socket.emit('ping-ans' ,'connection was successfully created');
  socket.broadcast.emit('ping-ans' ,'Hello from the other side');
}

