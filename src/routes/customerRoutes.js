const { Router } = require('express');

const router = Router();

const { createCustomer, getAllCustomers, deleteCustomer } = require('../controllers/customerController');

router.get('/', (req, res) => {
    res.status(200).json({
            ok:true
    })
})

router.get('/all', getAllCustomers);
router.post('/add', createCustomer );
router.delete('/:id', deleteCustomer);

module.exports = router;