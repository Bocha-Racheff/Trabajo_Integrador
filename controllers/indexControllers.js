const db2 = require('../database/models');
const db = require("../db/db.js");

const indexController = {
    
    showProducts: function(req, res) {

        db2.Product.findAll({raw: true})
        .then( data => {
            console.log(data);

            return res.render("index", { listadoProductos : data });
        })
        .catch(error =>{
            console.log(error);
        })

        /*const listadoProductos = db.productos;
        
        return res.render("index", { listadoProductos});*/
    }

};

module.exports = indexController;