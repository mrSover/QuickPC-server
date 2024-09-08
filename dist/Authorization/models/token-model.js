"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TokenSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    refreshToken: { type: String, required: true }
});
const TokenModel = (0, mongoose_1.model)('Token', TokenSchema);
exports.default = TokenModel;
