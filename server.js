// Install express server 
const express = require('express');
const path = require('path');
const dotenv = require("dotenv");
dotenv.config(); // Configuracion del .env
const app = express();
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/Proyecto-Final-Avanzado-Front-End'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/Proyecto-Final-Avanzado-Front-End/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.FRONT_PORT_SERVER || 8080);