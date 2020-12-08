const Category = require("../models/Category")

module.exports = {
    getCategories: async (req, res) => {
        const cates = await Category.find();

        let categories = [];
        for (let i in cates) {
            categories.push({
                ...cates[i]._doc,
                img: `${process.env.BASE}/assets/images/${cates[i].slug}.png`
            });
        }

        res.json({ categories });
    },
    addAction: async (req, res) => {

    },
    getList: async (req, res) => {

    },
    getItem: async (req, res) => {

    },
    editAction: async (req, res) => {

    }
}