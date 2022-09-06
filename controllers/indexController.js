const fs = require('fs');
const path = require('path');
const menuList = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/menuList.json'), 'utf-8'))

const indexController = { 
    index: (req, res) => {
        res.render('index');
    },
    details: (req, res) => {
        let idPlato = +req.params.id;
        let plato = menuList.find(plato => plato.id === idPlato)
        res.render('detalleMenu', {
            plato: plato,
        })
    },
}



module.exports = indexController;