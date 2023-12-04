const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middleware/validarCampos");
const { isAuthenticated } = require("../middleware/isAuthenticated");
const router = Router()
module.exports = router