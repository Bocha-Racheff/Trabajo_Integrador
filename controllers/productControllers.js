const db = require("../database/models");
const op = db.Sequelize.Op

const productController = {

    show: function (req, res) {
        const idProducto = req.params.id;

        const producto = db.productos.find((element) => { return element.id == idProducto })
        let dataProducto = db.productos[0];
        if (producto) {
            dataProducto = producto;
        }

        return res.render("product", { dataProducto });
    },

    productAdd: function (req, res) {

        return res.render("product-add", { dataUsuario: db.usuarios[0] });
    },


    search: function (req, res) {
        let infoABuscar = req.query.search; //obtengo la info de la querystring. www.tienda.com/search?busqueda=1984


        db.Product.findAll({
            include: [{ association: "user" }],
            // sequelize where with or operator
            where: {
                [op.or]: {
                    nombre_producto: { [op.like]: "%" + infoABuscar + "%" },
                    descripcion: { [op.like]: "%" + infoABuscar + "%" }
                }
            },
            order: [["createdAt", "DESC"]]
         
        })
            .then((data) => {
                return res.render("search-results", { listadoProductos: data, dataUsuario: req.session.user });
            })
            .catch((error) => {
                console.log(error);
            });

        //return res.render("search-results", {data:'hola'});
    }
};

module.exports = productController;
