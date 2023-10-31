const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
};

async function index(req, res) {
    const flights = await Flight.find({}).sort({ departs: 1 });
    res.render('flights/index', {title: 'All Flights', flights});
}

function newFlight(req, res) {
    const newFlight = new Flight();
    // Obtain the default date
    const dt = newFlight.departs;
    // Format the date for the value attribute of the input
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('flights/new', { departsDate, title: 'Add Flight', errorMsg: ''});
}

async function create(req, res) {
    // Remove empty properties so that defaults will be applied
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        await Flight.create(req.body);
        // Always redirect after CUDing data
        // We'll refactor to redirect ot the movies index after we implement it
        res.redirect('/flights');
    }   catch (err) {
        // Typically some sort of validation error
        console.log(err);
        res.render('flights/new', { title: 'Add Flight', errorMsg: err.message});
    }
}
