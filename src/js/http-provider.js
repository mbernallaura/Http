
const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

export{
    obtenerChiste,
    obtenerUsuarios
}

const obtenerChiste = async() =>{
    try {

        const resp = await fetch(jokeUrl);
        if(!resp.ok) throw 'No se pudo realizar la peticion';

        const {icon_url, id, value} = await resp.json();

        return {icon_url, id, value};

    } catch (error) {
        throw error;
    }
}

const obtenerUsuarios = async() =>{
    const resp = await fetch(urlUsuarios);
    //*Al poner el nombre de la llave del JS entre llaves, va a buscar una llave con ese nombre y trae los datos de esta
    //*Se quiso poner otro nombre a la data por usuarios
    const {data: usuarios} = await resp.json();

    return usuarios;
}


