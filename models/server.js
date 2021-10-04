const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';

        // Middlwares
        this.middlewares();
        
        // Rutas del app
        this.routes();
    }

    middlewares(){
        // Cors
        this.app.use( cors() );

        // Lectura y parseo json
        this.app.use( express.json() );

        // Directorio Público
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use( this.usuariosPath, require('../routes/usuarios') );
    }

    listen(){
       this.app.listen(this.port, () => {
            console.log('Aplicación ejecutandose en el puerto 8081');
        });
    }
}


module.exports = Server;