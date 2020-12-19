const descripcion = {
  demand: true,
  alias: 'd'
};
const completado = {
  default: true,
  alias: 'c'
};

const argv = require('yargs')
.command('crear', 'Crear un nuevo ToDo.', {
  descripcion
})
.command('actualizar', 'Actualizar un ToDo. Establecer como completado.', {
  descripcion,
  completado
})
.command('borrar', 'Borra un ToDo.', {
  descripcion
})
.help()
.argv;



module.exports = {
  argv
}