const jwt =  require('jsonwebtoken')

const verifyToken = (req,res,next) =>{

    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization ;
    if(authHeader && authHeader.startsWith('Bearer')){
        token = authHeader.split(" ")[1];
        //token = authHeader

        if(!token){
            return res.status(401).send({message: "No token, authorization denied"})
        }

        try {
            const decode = jwt.verify(token , process.env.JWT_SECRET)
            req.user = decode
            console.log("The decoded user is : ",req.user)
            next()
        } catch (error) {
            return res.status(400).send({message: "Token is not valid"})
        }
    }
    else{
        return res.status(401).send({message: "No token, authorization denied"})
    }
}

module.exports = verifyToken