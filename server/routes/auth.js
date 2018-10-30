const jwt = require('jsonwebtoken');

let checkToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, process.env.secret, (err, decoded) => {
      if (!err) {
        req.decoded = decoded;
      } else {
        req.err = err.message; 
      }
    });
  }

  next();
};

let checkTokenAdmin = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, process.env.secret, (err, decoded) => {
      if (!err) {
        req.decoded = decoded;  
      } else {
        req.err = err.message; 
      }
    });
  }

  next();
};

export { checkToken, checkTokenAdmin };
