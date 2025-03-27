const mongoose = require('mongoose');

const actionSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    selectedActions: { type: [String], required: true },
}, { timestamps: true });

module.exports = mongoose.model('Action', actionSchema);
