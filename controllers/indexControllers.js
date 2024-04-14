const db = require("../db/db.js");

const indexController = {
    
    showProducts: function(req, res) {
        const listadoProductos = db.productos;
        
        return res.render("index", { listadoProductos});
    }

};

module.exports = indexController;