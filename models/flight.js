// Require Mongoose
const mongoose = require('mongoose');
// Optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

// Defining the basic schema for the flight Model
const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Singapore', 'JAL', 'Etihad']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'NRT', 'HND'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        dafault: () => {
            const date = new Date();
            date.setFullYear(date.getFullYear() + 1)
            return date;
        }
    }
}, {
    timestamps: true
});

// Compiling the schema into a model
module.exports = mongoose.model('Flights', flightSchema);