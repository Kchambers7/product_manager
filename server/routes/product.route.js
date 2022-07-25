const ProductController = require('../controllers/product.controller');


module.exports = function(app){
  app.get('/api', ProductController.index);
  app.post('/api/product', ProductController.createProduct);
  app.get('/api/products', ProductController.getAllProducts);
  app.get('/api/product/:_id', ProductController.getOneProduct);
}