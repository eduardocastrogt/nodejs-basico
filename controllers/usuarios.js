const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const { nombre, edad, apellido = 'Sin apellido', pelicula = 'Sin película' } = req.query;

    res.json({
        'msg': 'Get - API',
        nombre,
        edad,
        apellido,
        pelicula
    });
}

const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        'msg': 'Put - API',
        id
    });
}

const usuariosPost = (req, res = response) => {
    const { nombre, edad, profesion } = req.body;
    res.json({
        'msg': 'Post - API',
        nombre,
        edad,
        profesion
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        'msg': 'Delete - API'
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}