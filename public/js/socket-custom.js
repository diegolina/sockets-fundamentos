var socket = io();

//escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor...')

});

//escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor...')

});


//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Diego H Linares',
    mensaje: 'Hola mundo!'
}, function(res) {
    console.log('Respuesta Server: ', res.mensaje);

});

//escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);

});