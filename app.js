const colors = require('colors');
const argv = require('./config/yargs').argv;
const { crear, getListado, actualizar, borrar } = require('./to-do/to-do');

let comando = argv._[0];

switch (comando) {
  case 'crear':
    let todo = crear(argv.descripcion);
    console.log(todo);
    break;
  case 'listar':
    let listado = getListado();
    for (const todo of listado) {
      console.log('==============To do=================='.green);
      console.log(todo.descripcion);
      console.log('Estado: ', todo.completado);
      console.log('====================================='.green);
    }
    break;
  case 'actualizar':
    let actualizado = actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
    break;
  case 'borrar':
    let borrado = borrar(argv.descripcion);
    console.log(borrado);
    break;

  default:
    console.log('Comando desconocido');
    break;
}