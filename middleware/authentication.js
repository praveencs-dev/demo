const jwt = require("jsonwebtoken");
function authentication(req, res, next) {
    let auth = req.headers.authorization;
    if (!auth) {
        return resSender(res, 401, { message: "token is missing" });
    } else {
        let token=auth.split(' ')[1];
        try{
            let decoded = jwt.verify(token, process.env.SECRET_KEY);
            req.user=decoded;
            return  next()
        }
        catch(err) {
            return resSender(res, 401, { message: "invalid sign" })
        }
        
    }

}
module.exports = authentication;