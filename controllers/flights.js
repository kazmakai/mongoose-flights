const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
};

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', {title: 'All Flights', flights});
}

function newFlight(req, res) {
    const newFlight = new Flight();
    // Obtain the default date
    const dt = newFlight.departs;
    // Format the date for the value attribute of the input
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    // departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('flights/new', { title: 'Add Flight', errorMsg: '', departsDate});
}

async function create(req, res) {
    // remove any whitespace at the start and end of 
}
