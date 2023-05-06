const { Router } = require("express");
const router = Router();
const productController = require("../controllers/productController");

router.route('/')
    .get(productController.getAllProducts)
    .post(productController.createProduct);

router.route('/:id')
    .get(productController.getProductById)
    .put(productController.updateProduct)
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct);

module.exports = router;