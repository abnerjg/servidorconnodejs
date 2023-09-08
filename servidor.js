const http = require('http'); 
const host = 'localhost';
const puerto = 8000;

const listener = (_req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
  
    const respuesta = {
      nombre: 'Abner Jimenez',
      mensaje: 'Que ondas!'
    };
  
    res.end(JSON.stringify(respuesta));
  };

  const servidor = http.createServer(listener);
  servidor.listen(puerto, host, () => {
    console.log(`Servidor escuchando en http://${host}:${puerto}`);
  });
  const chalk = require('chalk');

  console.log(chalk.green(`Servidor escuchando en http://${host}:${puerto}`));