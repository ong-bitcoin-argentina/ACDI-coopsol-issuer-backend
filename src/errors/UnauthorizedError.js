

class UnauthorizedError extends Error{
  constructor(props){
    super(props);
    this.name = "Unauthorized";
    this.statusCode = 401;
  }
}

module.exports = UnauthorizedError;