// SECCION 53: INTRODUCCION A NODE JS - CREANDO UN PROYECTO CON ECPRESS, SEQUELIZE PUG Y BOOTSTRAP
// 389. Lo que vamos a construir en este capitulo (sitio web con node y MVC)
// 390. Que es Node JS
// 391. Que es Express
// 392. Instala la ultima version de Node para utilizar imports y exports
// 393. Habilitando la sintaxis de imports y exports
// 394. Routing en Express
// 395. Que es un template engine - Y como habilitar uno
// 396. Pasar variables hacia las vistas
// 397. Creando un Layout principal
// 398. Agregar hojas de estilos y archivos estaticos
// 399. Creando un header y navegacion principal
// 400. Middleware en express
// 401. Creando todas las vistas
// 402. Creando la pagina de nosotros
// 403. Conenctando a una base de  datos MySQL
// 404. Introduccion a model view controller y creando un modelo
// 405. Creando un controller
// 406. Consultar la base de datos
// 407. Consultar la BD de cada viaje segun URL visitada
// 408. Creando un formulario para testimoniales
// 409. Leer datos escritos en el fromulario
// 410. Validacion de formularios
// 411. Almacenar los datos en la base de datos
// 412. Consultar los testimoniales de la base de datos
// 413. Mostrar los testimoniales en la vista
// 414. Primeros pasos con el index
// 415. Reutilizando el codigo de viajes
// 416. Creando la seccion de descuento
// 417. Como realizar multiples consultas
// 418. DEPLOYMENT Que son y como utilizar variables de entorno
// 419. DEPLOYMENT  Añadiendo variables de entorno al proyecto
// 420. DEPLOYMENT Subiendo el codigo a git
// 421. DEPLOYMENT Subiendo el codigo a Heroku
// 422. DEPLOYMENT Subir la base de datos y configurar variables


import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';


const app = express();

// Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .catch( error => console.log(error));


// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
    next();
});


// Habilitar express.json
app.use(express.urlencoded({ extended: false }));


// Definir la carpeta publica
app.use(express.static('public'));

// Agregar Router
app.use('/', router);


app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
})