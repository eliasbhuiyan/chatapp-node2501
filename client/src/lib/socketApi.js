import io from 'socket.io-client';
import { store } from '../store';
import { addMessage } from '../slices/messagesSlice';

let socket;

const initSocket = () => {
    socket = io.connect("http://localhost:8000")

    socket.on("new_message", (res) => {
        store.dispatch(addMessage(res))
    })
    
}

export { socket, initSocket }