const urlCRUD = 'https://reqres.in/api/users';

const getUsuario = async( id ) =>{
    const resp = await fetch(`${urlCRUD}/${id}`);
    const {data} = await resp.json();
    return data;
}

const crearUsuario = async (usuario) =>{
    const resp = await fetch(urlCRUD, {
        //* Adentro se Configura el fetch
        method: 'POST',
        //* Data que se quiere enviar, si es un responsive, necesita que sea un String
        //!Nota: SI NO SE CONFIGURA EL FETCH, POR DEFECTO VA A SER UNA PETICION GET
        //!Convertir al usuario en string con formato JSON
        body: JSON.stringify(usuario),
        headers:{
           //*Headers: Informacion extra que el backed pueda requerir (tokens)
           //!content-type: se le dice al backend que la informacion que se manda es de formato tipo JSON
           'Content-Type': 'application/json'
        }
    });

    return await resp.json();
}

const actualizarUsuario = async (id, usuario) =>{
    const resp = await fetch( `${urlCRUD}/${id}`, {
        //* Adentro se Configura el fetch
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers:{
           'Content-Type': 'application/json'
        }
    });
    
    return await resp.json();
}

const borrarUsuario = async (id)=>{
    const resp = await fetch(`${urlCRUD}/${id}`,{
        method: 'DELETE'
    });

    return (resp.ok) ? 'Borrado': 'No se pudo eliminar';
}


export{
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}