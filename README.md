
# Chat Api

This is a API service its soul purpose is to give sevice for the real time chat.
It uses socket.io as its real time communication. MongoDb for the 
chat data storage system.


## Authors

- [Cupid Chakma](https://github.com/cuchakma)
- [Satyajit Talukder](https://github.com/gooyeduck)


## Installation

install `MongoDb` in your local machine. If you dont have MongoDb installed then follow the instruction.

https://docs.mongodb.com/guides/server/install/
##
In the project file need to install the `package.json` dependencies.
run the following. 
```bash
npm install
```
After that go to the `server` directory
```bash
cd server
```
To start the project run the following command to start the `nodemon` server. The following command the `server/index.js` script.
```bash
npm start
```
###
If the installation is successfull the following output will show in the terminal.

```bash
Listening on port:: http://localhost:3000/
Mongo has connected succesfully
```