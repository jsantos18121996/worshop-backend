const { Schema, model } = require('mongoose');

const CustomerSchema = Schema({
    code: {
        type: String,
        unique: true
    },
    documentType: {
        type: String,
        required: true
    },
    documentNumber: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lineOfBusiness: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

CustomerSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})

module.exports = model("customer", CustomerSchema);