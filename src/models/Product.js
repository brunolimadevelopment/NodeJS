const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

// Model Product
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    // preenche automaticamente
    createdAt: {
        type: Date,
        default: Date.now,
    }
});


ProductSchema.plugin(mongoosePaginate);

// registra a model da aplicação
mongoose.model('Product',ProductSchema);