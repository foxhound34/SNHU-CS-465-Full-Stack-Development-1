const fs = require('fs');

const booking = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

/* GET travel view */
const rooms = (reg, res) => {
    res.render('rooms', { title: 'Travlr Getaways', booking});
};

module.exports = {
    rooms
};