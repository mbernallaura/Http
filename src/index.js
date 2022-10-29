//import { init } from './js/chistes-page';
import { obtenerChiste,obtenerUsuarios } from './js/http-provider';
import { init } from './js/usuarios-page';
import * as CRUD from './js/crud-provider';

// const jokeUrl = 'https://api.chucknorris.io/jokes/random';
//*Errores que se pueden generar en http:
//? 200 = Todo lo hizo bien
//? 201 = el registro se creo
//? 404 = No encontró el recurso
//? 500 = problemas del servidor

// fetch(jokeUrl).then(resp =>{
//     resp.json().then(({id, value}) =>{
//         console.log(id);
//         console.log(value);
//     });
// })

//*Hacer lo anterior de una mejor manera 
//?Se puede acortar de esa manera porque es una funcion de flecha que solo tiene una instruccion
// fetch(jokeUrl)
//     .then(resp => resp.json())
//     .then(({id, value}) =>{
//         console.log(id,value);
//     });

//obtenerChiste().then(console.log);
//init();
//obtenerUsuarios().then(console.log);
//init();
// CRUD.getUsuario(2).then(console.log);
// CRUD.crearUsuario({
//     name: 'Fernando',
//     job: 'Carpintero'
// }).then(console.log);

// CRUD.actualizarUsuario(1,{
//     name: 'Laura',
//     jod: 'Programadora'
// }).then(console.log);

CRUD.borrarUsuario(1).then(console.log);

