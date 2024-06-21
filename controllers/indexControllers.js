const db = require('../database/models');


const indexController = {
    
    showProducts: function(req, res) {

        db.Product.findAll({
            include: [{ association: "user" }],
            order: [["createdAt", "DESC"]]
        })
        .then( data => {
            console.log("data usuario: ", JSON.stringify(data, null, 4));

            return res.render("index", { listadoProductos : data, dataUsuario : req.session.user });
        })
        .catch(error =>{
            console.log(error);
        })

    }

};

module.exports = indexController;