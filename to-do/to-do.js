const fs = require('fs');

let listaToDo = [];

const guardarDB = () => {
  let data = JSON.stringify(listaToDo);
  fs.writeFile('db/data.json', data,
  (err) => {
    if (err) throw new Error('No se pudo grabar', err)
  })
}

const cargarDB = () => {
  try {
    listaToDo = require('../db/data.json');
  } catch (err) {
    listaToDo = [];
  }
}

const crear = (descripcion) => {
  cargarDB();
  let toDo = {
    descripcion,
    completado: false
  }
  listaToDo.push(toDo);
  guardarDB();
  return toDo;
}

const getListado = () => {
  cargarDB();
  return listaToDo;
}

const actualizar = (descripcion, completado = true) => {
  cargarDB();
  let index = listaToDo.findIndex(todo => todo.descripcion === descripcion);
  if (index > -1) {
    listaToDo[index].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
}

const borrar = (descripcion) => {
  cargarDB();
  let index = listaToDo.findIndex(todo => todo.descripcion === descripcion);
  if (index > -1) {
    listaToDo.splice(index, 1);
    guardarDB();
    return true;
  } else {
    return false;
  }
}

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
}