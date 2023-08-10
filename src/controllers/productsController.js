module.exports = {
    carrito: (req,res) => {
        return res.render('products/carrito')
    },
    detalleProducto: (req,res) => {
        return res.render('products/detalleProducto')
    }
}