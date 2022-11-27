const {Router} = require("express");

const {about} = require('../controller/AboutController');

const app =  Router();

app.get('/about', about);

module.exports = app;