const { Schema, model } = require('mongoose');

const CustomerSchema = Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
})

module.exports = model("customer", CustomerSchema);