import axios from 'axios';

const baseUrl_productos = process.env.API
console.log(baseUrl_productos)


//Login :3

export async function signUp(Usuario, Password, Nombre, Email) {

    try {
        const response = await axios({
            url: `${baseUrl_productos}usuario/signup`,
            method: 'POST',
            data: {
                Usuario: Usuario,
                Password: Password,
                Email: Email,
                Nombre: Nombre,
            },
        });
        return response
        
    } catch (e) {
        console.log(e);
    };
}


