import * as SocketIo from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import AuthService from '../services/auth-service';

//not the most beatuful one but whatever
export function validateSocket(socket: SocketIo.Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>, next: any) {
  try {
    AuthService.validateToken(socket.request.headers.authorization || '');
    next();
  } catch(error) {
    socket.emit('not-auth', 'Not authenticated');
  }
}
