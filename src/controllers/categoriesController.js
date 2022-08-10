const { response } = require('express');
const { mongo } = require('mongoose');
const Categorie = require('../models/Categories');
const Customer = require('../models/Customer');

const getAllCategories = async(req, res = response) => {

    try {
        //let categories = await Categorie.find().populate("customer", "name");
        let categories = await Categorie.find();
        console.log('categories result', categories);
        res.status(200).json({
            ok: true,
            categories
        })
    } catch (error) {
        console.log('error in getAllCategories', error);
        res.status(500).json({
            ok: false,
            message: "Hubo un error consultando las categorías"
        })
    }
   
}

const addCategories = async(req, res = response) => {
    console.log('req.body in addCategories', req.body);
    const categorie = new Categorie(req.body);
    try {
        categorie.customer = req.body.customer;
        const categorie_created = await categorie.save();
        res.status(201).json({
            ok: true,
            categorie_created : categorie_created
        })
    } catch (error) {
        console.log('error creando la categoria', error);
        res.status(500).json({
            ok: false,
            message: "No pudo crearse la categoría"
        })
    }

    
}

const updateCategories = async(req, res = response) => {
    console.log("req.params de updateCategories" , req.params);
    const categoryID = req.params.id;
    try {
        const categoryFilteredByID = Categorie.findById(categoryID);
        if(!categoryFilteredByID) {
            res.status(404).json({
                ok: false,
                message: "Categoría no encontrada"
            })
        }
        const categoryNew = {
            ...req.body
        }
        const categoryUpdate = await Categorie.findByIdAndUpdate(categoryID, 
            categoryNew, {new: true})
        res.status(201).json({
            ok: true,
            message: categoryUpdate
        }) 
    } catch (error) {
        console.log("error actualizando la categoría", error)
        res.status(500).json({
            ok: false,
            message: "No pudo actualizarse la categoría"
        })
    }
    
}

const findCategorieByID = async (req, res = response) => {
    const categoryID = req.params.id;
    const categorieByID = await Categorie.findById(categoryID);
    if(!categorieByID) {
        res.status(400).json({
            ok: false,
            message: "Categoría no encontrada"
        })
    }
    try {
        await Categorie.findByIdAndDelete(categoryID);
        res.status(200).json({
            ok: true,
            message: "Categoría encontrada",
            category_find : categorieByID
        }) 
    } catch (error) {
        console.log('error in  findCategorieByID', error)
        res.status(500).json({
            ok: false,
            message: "Problema recuperando la categoría"
        })
    }
}

const deleteCategories = async (req, res = response) => {
    const categoryID = req.params.id;
    console.log('categoryID', categoryID);
    const categoryByDelete = await Categorie.findById(categoryID)
    if(!categoryByDelete) {
        res.status(404).json({
            ok: false,
            message: "Categoría no encontrada para eliminar"
        })
    }
    try {
        await Categorie.findByIdAndDelete(categoryID);
        res.status(201).json({
            ok: true,
            message: "Categoría eliminada",
            category_deleted : categoryByDelete
        }) 
    } catch (error) {
        console.log('error in deleteCategorie ', error)
        res.status(500).json({
            ok: false,
            message: "No pudo eliminarse la categoría"
        })
    }
    
}

module.exports = {
    getAllCategories,
    addCategories,
    updateCategories,
    deleteCategories,
    findCategorieByID
}