const Item = require("../models/Item");

// GET ITEMS
exports.getItems = async (req, res) => {

    try {

        const items = await Item.find({
            userId: req.session.userId
        });

        res.json(items);

    } catch (error) {

        res.status(500).json({
            message: "Error"
        });
    }
};

// ADD ITEM
exports.addItem = async (req, res) => {

    try {

        const { name } = req.body;

        const item = new Item({
            name,
            userId: req.session.userId
        });

        await item.save();

        res.json(item);

    } catch (error) {

        res.status(500).json({
            message: "Error"
        });
    }
};

// DELETE ITEM
exports.deleteItem = async (req, res) => {

    try {

        await Item.findOneAndDelete({
            _id: req.params.id,
            userId: req.session.userId
        });

        res.json({
            message: "Deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: "Error"
        });
    }
};

// UPDATE ITEM
exports.updateItem = async (req, res) => {

    try {

        const updatedItem = await Item.findOneAndUpdate(
            {
                _id: req.params.id,
                userId: req.session.userId
            },
            {
                name: req.body.name
            },
            {
                new: true
            }
        );

        res.json(updatedItem);

    } catch (error) {

        res.status(500).json({
            message: "Error"
        });
    }
};