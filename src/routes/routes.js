const { Router } = require('express');
const path = require('node:path');
const {
    handleNuevaCancion,
    handleGetData,
    handleEliminarCancion,
    handleEditarCancion,
} = require('../controllers/controllers');
const router = Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../static/index.html'));
});

router.get('/canciones', handleGetData);

router.post('/canciones', handleNuevaCancion);

router.delete('/canciones/:id', handleEliminarCancion);

router.put('/canciones/:id', handleEditarCancion);

module.exports = router;
