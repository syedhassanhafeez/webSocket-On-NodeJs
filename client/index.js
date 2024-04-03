import { WebSocket } from 'ws'; // Importing WebSocket from 'ws' library

const ws = new WebSocket('ws://localhost:8080'); // Instantiating WebSocket
ws.onopen = () => {
  console.log('ws opened on browser');
  ws.send('hello world');
};

ws.onmessage = (message) => {
  console.log('From Server to Client transfer message: ', message.data); // Accessing message data
};
