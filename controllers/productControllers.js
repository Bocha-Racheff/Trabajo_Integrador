const db = require("../database/models");
const op = db.Sequelize.Op
const { validationResult } = require('express-validator');

const productController = {

    showDetail: function (req, res) {
        const idProducto = req.params.id;

        db.Product.findByPk(idProducto, {

            include: [
                {
                    association: 'comments'
                },
                {
                    association: 'user'

                }
            ],

        }).then(async (data) => {
            console.log("data producto: ", JSON.stringify(data, null, 4));
            let comments = await db.Comment.findAll({
                include: [{ association: "user" }],
                where: {
                    post_id: idProducto,
                },
                order: [["createdAt", "DESC"]]
            })
                .then(data => {
                    console.log("comentario singular: ", JSON.stringify(data, null, 4))
                    return data;
                })
                .catch(error => {
                    console.log(error);
                })

            console.log("comentarios: ", JSON.stringify(comments, null, 4))

            return res.render("product", { dataProducto: data, comments: comments, dataUsuario: req.session.user, errors: {}, oldData: {} });

        })
            .catch((error) => {
                console.log(error);
            });

    },
    productAdd: function (req, res) {
        if (!req.session.user) {
            return res.redirect('/login');
        }
        return res.render("product-add", { dataUsuario: req.session.user, oldData: {}, errors: {} });
    },
    productStore: function (req, res) {
        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {
            return res.render("product-add", { errors: resultValidation.mapped(), oldData: req.body, dataUsuario: req.session.user });
        }

        let data = req.body;
        let idUsuario = req.session.user.id;
    
        let product = {
            usuario_id: idUsuario,
            nombre_imagen: data.imgProducto,
            nombre_producto: data.titulo,
            descripcion: data.descripcion
        };
    
        db.Product.create(product)
            .then((productCreado) => {
        
                return res.redirect(`/profile`);
            })
            .catch((error) => {
                console.log(error);
            });

    },

    productEdit: function (req, res) {
        if (!req.session.user) {
            return res.redirect('/login');
        }

        const idProducto = req.params.id;
        db.Product.findByPk(idProducto).then((data) => {
            if (req.session.user.id != data.usuario_id) {
                return res.redirect('/');
            }
            const oldData = { id: idProducto, imgProducto: data.nombre_imagen, titulo: data.nombre_producto, descripcion: data.descripcion }
            return res.render("product-edit", { dataUsuario: req.session.user, oldData, errors: {} });

        })
            .catch((error) => {
                console.log(error);
            });



    },
    productUpdate: function (req, res) {
        const resultValidation = validationResult(req);
        const id = req.params.id;
        let data = req.body;
        let product = {
            nombre_imagen: data.imgProducto,
            nombre_producto: data.titulo,
            descripcion: data.descripcion
        };


        if (!resultValidation.isEmpty()) {
            return res.render("product-edit", { errors: resultValidation.mapped(), oldData: { ...req.body, id }, dataUsuario: req.session.user });
        }

        db.Product.update(product, {
            where: {
                id: id,
            },
        })
            .then(function (result) {
                console.log(result)
                return res.redirect(`/products/detail/${id}`);
            })
            .catch(function (err) {
                console.log(err);
            });

    },
    destroy: function (req, res) {
        let productABorrar = req.params.id;

        db.Product.findByPk(productABorrar).then((data) => {
            if (req.session.user.id != data.usuario_id) {
                return res.redirect('/');
            }
            db.Product.destroy({
                where: [{ id: productABorrar }],
            })
                .then(() => {
                    return res.redirect("/");
                })
                .catch((error) => {
                    console.log(error);
                });

        })
            .catch((error) => {
                console.log(error);
            });


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
    },
    addComment: function (req, res) {
        if (!req.session.user) {
            return res.redirect('/login');
        }
        const idProd = req.params.id;
        return res.render("product", { dataUsuario: req.session.user, oldData: {}, errors: {} });
    },
    commentStore: function (req, res) {
        if (!req.session.user) {
            return res.redirect('/login');
        }


        const idProducto = req.params.id;

        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {

            console.log('errors')
            db.Product.findByPk(idProducto, {

                include: [
                    {
                        association: 'comments'
                    },
                    {
                        association: 'user'

                    }
                ],

            }).then(async (data) => {

                let comments = await db.Comment.findAll({
                    include: [{ association: "user" }],
                    where: {
                        post_id: idProducto,
                    },
                    order: [["createdAt", "DESC"]]
                })
                    .then(data => {
                        return data;
                    })
                    .catch(error => {
                        console.log(error);
                    })


                return res.render("product", { dataProducto: data, comments: comments, dataUsuario: req.session.user, errors: resultValidation.mapped(), oldData: req.body });

            })
                .catch((error) => {
                    console.log(error);
                });

        }else{

       


        console.log('sin errors')

        let comentarioCreado = {
            post_id: idProducto,
            usuario_id: req.session.user.id,
            texto_comentario: req.body.comentario
        }
        db.Comment.create(comentarioCreado)
            .then((dataComment) => {
                //4)Redirección
                db.Product.findByPk(idProducto, {

                    include: [
                        {
                            association: 'comments'
                        },
                        {
                            association: 'user'

                        }
                    ],

                }).then(async (data) => {

                    let comments = await db.Comment.findAll({
                        include: [{ association: "user" }],
                        where: {
                            post_id: idProducto,
                        },
                        order: [["createdAt", "DESC"]]
                    })
                        .then(data => {

                            return data;
                        })
                        .catch(error => {
                            console.log(error);
                        })



                    return res.render("product", { dataProducto: data, comments: comments, dataUsuario: req.session.user, oldData: {}, errors: {} });

                })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });

        }


    }
};

module.exports = productController;
