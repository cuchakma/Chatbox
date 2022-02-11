const path     = require('path');    
const express  = require('express');
const http     = require('http');
const socketio = require('socket.io');

const app     = express();
const server  = http.createServer(app); 
const io      = socketio(server);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets/js')));


/**
 * This Code Runs When A Client Connects(Open New Connection)
 */
io.on('connection', socket => {

    /**
     * This method is for sending a welcome message to the new user
     */
    socket.emit('message', 'Welcome To Chat Cord !');

    /**
     * This code portion is broadcasted when a user sends a message to another user
     */
    socket.broadcast.emit('message', 'A User Has Joined');

    /**
     * Runs When A Client Disconnects
     */
    socket.on('disconnect', () => {
        /**
         * This method runs when a client disconnects
         */
        io.emit('message', 'A user has left the chat');
    });

    /**
     * Listen for chatMessage
     */
    socket.on('chatMessage', msg => {
        io.emit('message', msg);
    });

});
const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});

console.log("Something new");

const some =(first) => { 
    array=[a,b,c];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }
 }