const fs = require('node:fs/promises');
const path = require('node:path');
const db = path.join(__dirname, '../data/repertorio.json');

const handleGetData = async (req, res) => {
    const data = await fs.readFile(db, 'utf-8');
    const canciones = JSON.parse(data);
    res.send(canciones);
    res.end;
};

const handleNuevaCancion = async (req, res) => {
    const data = await fs.readFile(db, 'utf-8');
    const oldRepertorio = JSON.parse(data);
    const newRepertorio = [...oldRepertorio, req.body];
    fs.writeFile(db, JSON.stringify(newRepertorio, null, 4));
    return res.status(200).send('Canción agregada correctamente');
};

const handleEliminarCancion = async (req, res) => {
    const data = await fs.readFile(db, 'utf-8');
    const id = req.params.id;
    console.log(id, typeof id);
    const oldRepertorio = JSON.parse(data);
    const newRepertorio = oldRepertorio.filter((c) => c.id != id);
    fs.writeFile(db, JSON.stringify(newRepertorio, null, 4));
};

const handleEditarCancion = async (req, res) => {
    const data = await fs.readFile(db, 'utf-8');
    const { id, titulo, artista, tono } = req.body;
    const repertorio = JSON.parse(data);
    const index = repertorio.findIndex((cancion) => cancion.id == id);
    repertorio[index].titulo = titulo;
    repertorio[index].artista = artista;
    repertorio[index].tono = tono;
    fs.writeFile(db, JSON.stringify(repertorio, null, 4));
};

module.exports = {
    handleGetData,
    handleNuevaCancion,
    handleEliminarCancion,
    handleEditarCancion,
};
