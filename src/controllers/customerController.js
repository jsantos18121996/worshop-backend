const { response } = require("express");
const Customer = require("../models/Customer");

const createCustomer = async(req, res = response) => {

    try {
       const { email } = req.body;
       let customer =  await Customer.findOne({ email });
       console.log('customer encontrado -> ', customer);
       if(customer) {
        res.status(400).json({
            ok: false,
            message: "Ya existe un usuario con ese email"
        })
       } else {
        //llamar al query que agrega
        customer = new Customer(req.body);
        await customer.save();
        res.status(201).json({
            ok: true,
            id: customer.id,
            name: customer.name,
            message: "Customer agregado satisfactoriamente"
        }) 
       }
         
    } catch (error) {
        console.log('error in createCustomer', error);
        res.status(500).json({
            ok: false,
            message: "No pudo agregar el customer en la BD"
        })
    }
    
}

const getAllCustomers = async(req, res = response) => {
    let customers = await Customer.find();
    console.log('customers all', customers);
    res.status(200).json({
        ok: true,
        customers: customers
    })
}

const deleteCustomer = async (req, res= response) => {
    let customerID = req.params.id;
    let customerByID = await Customer.findById(customerID);
    if(!customerByID) {
        res.status(404).json({
            ok: false,
            message: "No se encontró al customer que desea eliminar"
        })
    }
    
    try {
        await Customer.findByIdAndDelete(customerID);
        res.status(200).json({
            ok: true,
            message: "Customer eliminado con éxito",
            customer_deleted : customerByID
        })
    } catch(error) {
        res.status(500).json({
            ok: false,
            message: "Hubo un problema al intentar eliminar el customer"
        })
    }
    
}

module.exports = {
    createCustomer,
    deleteCustomer,
    getAllCustomers
}