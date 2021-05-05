const Express = require('./config/express')
class Server{
    constructor(){
        this.app = new Express()
        this.app.listen()
    }

    startApp(){
        new Server()
    }
}
module.exports = Server