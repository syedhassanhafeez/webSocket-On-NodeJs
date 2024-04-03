import { WebSocketServer } from 'ws';
import express from "express";

const app = express();
const port =8080;

// Server Instance store in server variable
const server= app.listen(port,()=>console.log("Server listening ..."));


// WebSocket is biDirectional full duplex persistance connection.
// First time request in http mode and also responses as well. But once first cycle of request and response is complete then no any other request because websocket build connection between server and client.
// In websocket, Full Duplex means both client and server request and response at same time
// Mostly use real time application like trading app without page reloading data changes or fluctating values 
//BiDirectional means two-way communication channel between the client and the server.
// StateFull means a stateful connection maintains an ongoing two-way communication channel between the client and the server.
const wss = new WebSocketServer({server});
  
wss.on('connection',(ws)=>{
    ws.on("message",(data)=>{
        console.log("From Client to Server transfer message : %s",data);
        ws.send("Thanks Buddy!")
    })
})