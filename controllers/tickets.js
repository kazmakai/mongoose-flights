const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket, 
    create
};

async function newTicket(req, res) {
    // Reference the flight
    const flight = await Flight.findById(req.params.id) // getting the flight Id
    res.render('tickets/new', { title: 'Add Ticket', flight });
};

async function create(req, res) {
    // Reference the flight
    const flight = await Flight.findById(req.params.id)
    // Try/catch: create a ticket
    try {
        const newTicket = await Ticket.create(req.body);
        newTicket.flight = flight; 
        await newTicket.save(); // Save ticket to the database
        res.redirect(`/flights/${flight._id}`); // Redirect to the flight details page if it succeeds
    } catch (err) {
        res.render('tickets/new', { title: 'Add Ticket', flight }); // If it fails, render the tickets/new page to allow user to try again
        console.log(err);
    }
};
