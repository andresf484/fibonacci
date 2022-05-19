//Configurar variables de entorno
require('dotenv').config();

// Importar Dependencias
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

//Importar Modulos y Clases : Rutas y Clase de Conexion
const IndexRouter = require('./routers/index.Routes');
const FibonacciRouter = require('./routers/fibonacci.Routes');

class Server {

    constructor() {
        //Crear aplicación express
        this.app = express();
        this.#config();
    }

    #config() {

        //TODO - Middlewares

        // Para ocultar información sensible del servidor
        this.app.use(helmet());

        // Permitir conexiones desde otros origenes remotos
        this.app.use(cors());

        // Para cuando me envien una petición POST desde un formulario, 
        // pueda entender los campos que vienen desde allí
        this.app.use(express.urlencoded({ extended: false }));

        //Indicar al servidor que procesará datos en formato JSON durante las peticiones http
        this.app.use(express.json());

        //Usar morgan en express para el monitoreo de las peticiones htttp
        this.app.use(morgan('combined'));


        //TODO - Settings

        //Permitir conexiones de origen cruzado
        this.app.set('PORT', process.env.PORT || 3000);

        //------------Crear rutas----------
        let indexR = new IndexRouter();
        let fibonacciR = new FibonacciRouter();

        //-----------Añadir rutas a express----------
        this.app.use(indexR.router);
        this.app.use(fibonacciR.router);

        //Poner a la escucha el servidor
        this.app.listen(this.app.get('PORT'), () => {
            console.log("Servidor corriendo por el puerto => ", this.app.get('PORT'))
        });
    }

}
new Server();