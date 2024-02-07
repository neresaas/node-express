const express = require('express');
let app = express();

// De este modo, SIEMPRE va a buscar primero dentro de public
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.send('Hello')
});

app.listen(8081, () => {
    console.log('Server in 8081')
});

// Para enviarlo al repositorio
// git add . ----> Detecta todos los cambios que ha habido en el proyecto desde la última vez que hemos salvado los cambios en el repositorio
// git commit -m " " ----> Poner un nombre a todos los cambios efectuados
// git push ----> Envía el código del repositorio local al repositorio distribuido de Github

// En la carpeta gitignore puedes configurar que carpetas no quieres que se suban a github: si no quisieramos subir la carpeta public bastaría con escribir en el archivo public/