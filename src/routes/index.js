const { Router } = require("express");
const router = Router();
const { healthCheck, welcomePage } = require("../controllers/appController");

router
    .get("/", welcomePage)
    .get("/health", healthCheck)
    .use("/v1/products", require("./productsRoute"))
    .use("/v1/users", require("./productsRoute"));

module.exports = router;