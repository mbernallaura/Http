
const jokeUrl = 'https://api.chucknorris.io/jokes/random',
    urlUsuarios = 'https://reqres.in/api/users?page=2';

//Cloudinary
const cloudPreset = 'xyidzwnb',
     cloudUrl = 'https://api.cloudinary.com/v1_1/dknwsfxua/upload';

export{
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
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

//ArchivoSubir :: File
const subirImagen = async(archivoSubir)=> {
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);

    try{
        const resp = await fetch(cloudUrl,{
            method: 'POST',
            body: formData
        });

        if(resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }
    }catch(err){
        throw err;
    }
}


