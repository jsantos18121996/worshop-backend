const { Schema, model } = require('mongoose');

const CategorieSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: "customer"
    }
})

CategorieSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})

module.exports = model("categorie", CategorieSchema);