const { Router } = require('express');
const { getAllCategories, addCategories, updateCategories, deleteCategories } 
    = require('../controllers/categoriesController');

const router = Router();

router.get('/all', getAllCategories);
router.post('/add', addCategories);
router.put('/:id', updateCategories);
router.delete('/:id', deleteCategories);

module.exports = router;