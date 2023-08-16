import mongoose from 'mongoose';
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    
    description: String,
    price: {
        type: Number,
        default: 0.0,
        required: true
    },
    created: {
        type: Date,
    }
});

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
