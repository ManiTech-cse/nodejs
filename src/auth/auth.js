function auth(req,res,next){

    if(req.headers.authorization==="abc"){
        next();
    }else{
        res.status(401).send("Unauthorized request")
    }
}

module.exports =auth;