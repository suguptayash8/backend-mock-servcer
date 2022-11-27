const ContactController = (req, res) =>{
    res.json({
        "email": "suguptayash@gmail.com",
        "phone": 8290828725
    })
}

module.exports = {
    contact: ContactController
}