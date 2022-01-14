var express = require("express");
const todos = require("../controllers/todos");
var router = express.Router();

const todosCtrl = require("../controllers/todos");

router.get("/", todosCtrl.index);
router.delete("/:id", todosCtrl.delete);

router.post("/", todosCtrl.create);

module.exports = router;