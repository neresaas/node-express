const express = require('express');
let app = express();

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