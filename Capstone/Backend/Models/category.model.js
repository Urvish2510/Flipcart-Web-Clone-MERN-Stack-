const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: 'string',
        required: [true, "Please provide your Category Name"],
        trim: true,
    },
    slug: {
        type: 'string',
        required: [true, "Please provide your Category Slug"],
        trim: true,
        unique: true
    },
    type: {
        type: 'string',
    },
    parentId: {
        type: 'string',
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);