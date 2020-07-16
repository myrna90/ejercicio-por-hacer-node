//Comandos

const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'descripcion de la tarea por hacer'
    },
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Actualizar el estado completado de una tarea'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    },
    borrar: {
        default: true,
        alias: 'd',
        desc: 'Borrar una tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts)
    .command('actualizar', 'Actualizar el estado completaddo de una tarea', opts)
    .command('borrar', 'Borrar una tarea', opts)
    .help()
    .argv;

 module.exports = {
     argv
 }