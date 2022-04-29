require('dotenv').config()

const jwt = require('jsonwebtoken');


module.exports = {
  // function for our authenticated routes
  authMiddleware: function ({req}) {
    // allows token to be sent via  req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, process.env.secret, { maxAge: Math.floor(Date.now()/1000+(60*60)) });
      req.user = data;
    } catch {
      console.log('Invalid token');
      
    }
    return req;
    // send to next endpoint
    
  },
  
  signToken: function ({ username, email, _id }) {
    const {secret, expiration} = process.env;

    // console.log(secret, expiration)
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, process.env.secret, { expiresIn: Math.floor(Date.now()/1000+(60*60)) });
  },
};
