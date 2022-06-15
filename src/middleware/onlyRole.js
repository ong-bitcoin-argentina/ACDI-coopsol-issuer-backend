const jwt = require("jsonwebtoken");
const boom = require("@hapi/boom");
const JWT_SECRET = process.env.JWT_SECRET;

const onlyRole = role => {
  return (req, res, next) => {
    try {
      const authorization = req.headers.authorization;

      const [authScheme, token] = authorization?.split(" ") || [];

      if (!token) {
        return next(boom.unauthorized());
      }
      const decoded = jwt.verify(token, JWT_SECRET);

      if (!(decoded?.user?.roles?.includes(role))) {
        return next(boom.forbidden());
      }

      req.extra = {
        user: decoded.user
      }

      next();


    } catch (err) {
      if(["JsonWebTokenError","TokenExpiredError"].includes(err.name)){
        return next(boom.unauthorized(err.name))
      }
      
      next(err);
    }
  }
}

module.exports = onlyRole;