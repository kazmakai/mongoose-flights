const Flight = require('../models/flight');

module.exports = {
    create
};

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    console.log(req.body);
    console.log(flight);
    // Push (or unshift) subdocs into Mongoose arrays
    flight.destinations.push(req.body);
    try {
        //Save any change made to the flight doc
        await flight.save();
    } catch (err) {
        console.log(err);
    }
    // Respond to the Request (redirect if data has been changed)
    res.redirect(`/flights/${flight._id}`);
}