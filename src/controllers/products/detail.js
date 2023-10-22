const {readJSON, writeJSON} = require('../../data');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req,res) => {

    const products = readJSON('products.json');

    const id = req.params.id;
    const product = products.find(product => product.id === id)
    return res.render('products/detalleProducto',{
        sale: products.filter(products => products.categoryDestacad === 'in-sale'),
        ...product,
        toThousand
    })
}