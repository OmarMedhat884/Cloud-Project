const express = require("express");

const router = express.Router();

const {
    getItems,
    addItem,
    deleteItem,
    updateItem
} = require("../controllers/itemController");

const { isAuth } = require("../middleware/authMiddleware");

router.get("/items", isAuth, getItems);

router.post("/add", isAuth, addItem);

router.delete("/delete/:id", isAuth, deleteItem);

router.put("/update/:id", isAuth, updateItem);

module.exports = router;