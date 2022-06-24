const { response } = require('express');

const getAllCategories = (req, res = response) => {
    res.status(200).json({
        ok: true,
        message: "get All categories"
    })
}

const addCategories = (req, res = response) => {
    res.status(201).json({
        ok: true,
        message: "add Categorie"
    })
}

const updateCategories = (req, res = response) => {
    res.status(201).json({
        ok: true,
        message: "updateCategories"
    })
}

const deleteCategories = (req, res = response) => {
    res.status(201).json({
        ok: true,
        message: "Delete categorie"
    })
}

module.exports = {
    getAllCategories,
    addCategories,
    updateCategories,
    deleteCategories
}