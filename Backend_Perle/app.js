require('dotenv').config()

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const uuid = require('uuid');
const bodyParser = require('body-parser');
const { databaseService } = require('./services/databaseService');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '/frontend/resources/images/Administrador')));
bodyParser = {
    json: { limit: '500mb', extended: true },
    urlencoded: { limit: '500mb', extended: true }
};
// app.use(express.json({strict: false}));

//middlewares
const storage = multer.diskStorage({

    destination: path.join(__dirname, '/frontend/resources/images/Administrador'),
    filename: (req, file, cb) => {
        // cb(null, file.originalname + uuid.v4() + path.extname(file.originalname));
        cb(null, file.originalname);
    }
})

app.use(multer({
    storage: storage,
    destination: path.join(__dirname, '/frontend/resources/images/images/Administrador'),
    limits: { fileSize: 2000000 },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb('Error: Extension no soportada');
    }
}).single('image'));

// Conectarme con el archivo routes
const dbService = databaseService();
require('./routes')(app, dbService); //Rutas con .json

// Escucha las peticiones http en el puerto 3000 :D
app.listen(3000, function() {
    console.log('App listening on port 3000!')
});