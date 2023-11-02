// Require Mongoose
const mongoose = require('mongoose');
// Optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

// Since there's only the flightSchema code needs to reference destinationSchema, it can just be defined right above 
const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['DEN', 'JFK', 'SIN', 'NRT', 'HND']
    },
    arrivals: {
        type: Date,
        default: () => {
            const date = new Date();
            date.setFullYear(date.getFullYear() + 1)
            return date;
        }
    }
})

// Defining the basic schema for the flight Model
const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['Qatar Airways', 'Singapore Airlines', 'Emirates', 'Air Asia', 'Etihad Airways']
    },
    airport: {
        type: String,
        enum: ['DEN', 'JFK', 'SIN', 'NRT', 'HND'],
        default: 'DEN'
    },
    flightNumber: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: () => {
            const date = new Date();
            date.setFullYear(date.getFullYear() + 1)
            return date;
        }
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

// Compiling the schema into a model
module.exports = mongoose.model('Flights', flightSchema);