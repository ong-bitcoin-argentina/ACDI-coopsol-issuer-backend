const jwt = require("jsonwebtoken");
const UnauthorizedError = require("../errors/UnauthorizedError");
const JWT_SECRET = process.env.JWT_SECRET;

const onlyRole = role => {
  return (req,res,next) => {
    try{
      const authorization = req.headers.authorization;
  
      const [authScheme, token] = authorization?.split(" ") || [];
    
      if(!token) {
        throw new UnauthorizedError();
      }
      const decoded = jwt.verify(token, JWT_SECRET);
      
      if(!(decoded?.user?.roles?.includes(role))){
        throw new UnauthorizedError();
      }

      req.extra = {
        user: decoded.user
      }
    
      next();
    
    
    } catch(err){
      next(err);
    }
  }
} 

module.exports = onlyRole;