
const AboutController = (req, res) => {
    res.json({
         name: "suyash gupta" ,
         email:"Suyash Gupta",
         "job": "Full Stack Developer"
        });
}

module.exports = {
    about : AboutController
} 