/*const dbConnection = require('../../config/dbConnection');

module.exports = app => {
const connection = dbConnection();

//Consulta de Datos
app.get('/', (req, res) => {
connection.query('SELECT * FROM news', (err, result) => {
console.log(result);
res.render('news', {
news: result
});
});
});
//Insertar Datos
app.post('/news', (req, res) => {
const { title, news } = req.body;
connection.query('INSERT INTO news SET ? ',
{
title,
news
}
, (err, result) => {
res.redirect('/');
});
});
};*/

const express = require ('express');
const router = express.Router();
const productoController= require('../controllers/productoController');

router.get('/producto', productoController.list);
router.post('/producto/add', productoController.add);
router.get('/producto/eliminar/:id_productos', productoController.eliminar);
router.get('/producto/updatePro/:id_productos', productoController.updatePro);
router.post('/producto/actulizarpro', productoController.Actualizarpro);


module.exports=router;

