const db = require("../db/db.js");
//const db = require("../database/models");
const productController = {
    
    show: function(req, res) {
        const idProducto = req.params.id;

        const producto = db.productos.find((element) => { return element.id == idProducto })
        let dataProducto = db.productos[0];
        if(producto){
            dataProducto = producto;
        }
       
        return res.render("product", { dataProducto});
    },
    
    productAdd: function(req, res) {
        
        return res.render("product-add", {dataUsuario: db.usuarios[0]});
    },


    search: function(req, res) {
      
        return res.render("search-results", {data:'hola'});
    }
};

module.exports = productController;
