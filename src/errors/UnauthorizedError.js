

class UnauthorizedError extends Error{
  constructor(props){
    super(props);
    this.name = "Unauthorized";
  }
}

module.exports = UnauthorizedError;