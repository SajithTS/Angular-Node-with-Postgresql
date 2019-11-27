const jwt = require('jsonwebtoken');

module.exports = {
    validateToken: (req,res,next) => {
        const authorizationHeader = req.headers.authorization;
        let result;
        if(authorizationHeader){
            const token = req.headers.authorization.split(' ')[1];
            const options = {
                expiresIn : '2d',
                issuer : `http://localhost:3000`
            };

            try{
                result = jwt.verify(token,'11111222233334444',options);

                req.decoded = result;

                next();
            }
            catch(err){
                throw new Error(err);
            }
        }
        else{
            result = {
                error : `Authentication error`,
                status: 401
            }
            res.status(401).send(result);
        }
    }
}