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
    const { id } = req.params;
    console.log(id);
};

module.exports = { handleGetData, handleNuevaCancion, handleEliminarCancion };
