"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentModel = void 0;
const mongoose_1 = require("mongoose");
const ComponentSchema = new mongoose_1.Schema({
    name: String,
    count: Number,
    input_price: Number,
    price: Number,
    type: String,
    description: String,
    is_on_sale: Boolean,
    is_hot: Boolean,
    img: String,
    item_info: [{
            name: String,
            value: String
        }]
});
const ComponentModel = (0, mongoose_1.model)('Component', ComponentSchema);
exports.ComponentModel = ComponentModel;
