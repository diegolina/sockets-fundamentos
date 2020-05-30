const { io } = require('../server');


io.on('connection', (client) => {

    console.log('Usuario Conectado');

    client.on('disconnect', () => {
        console.log('Usuario Desconectado');

    });

    //escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /*
        if (mensaje.usuario) {
            callback({
                mensaje: 'ok'
            })
        } else {
            callback({
                mensaje: 'no ok'
            })
        };

*/

    });

    //enviar informacion
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion!'
    });


});