const {Router} = require('Router');
const { contact} = require('../controller/AboutController');

const contact = Router();
contact.get('/contact', contact);

module.exports = contact;