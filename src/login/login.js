const loginModule = require('express').Router();

loginModule.get("/",(req,res)=>{
    res.status(200).send("Welcome to login module")
})

loginModule.post("/", (req, res) => {
    const _info = req.body;

    
    if (!_info.username || !_info.password) {
        return res.status(400).send("Username and password are required");
    }

    console.log(_info);
    res.status(200).send("Login Success");
});

loginModule.delete("/", (req, res) => {
    const _info = req.body;

   
    if (!_info.username) {
        return res.status(400).send("Username is required");
    }

    console.log(_info);
    res.status(200).send("Delete successful");
});



module.exports = loginModule;