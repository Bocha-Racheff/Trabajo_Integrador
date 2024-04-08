const productController = {
 
    show: function(req, res) {
        return res.render("product", { datos: "hola" });
    },
    
    productAdd: function(req, res) {
        
        return res.render("product-add", { datos: "Hola" });
    },


    search: function(req, res) {
      
        return res.render("search-results", { datos: "hola" });
    }
};

module.exports = productController;
