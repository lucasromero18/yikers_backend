const users = require("../controllers/users.js")
const situations = require("../controllers/situations.js")
const comments = require("../controllers/comments.js")
const login_register = require("../controllers/login_register.js")
const categories = require("../controllers/categories.js")
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'yikecity'


module.exports = (app) => {

//WITHIN getAllSituations, MAKE JOIN KNEX CALL TO GRAB ALL SOLUTION_RATINGS AS WELL

    //TOKEN NOT REQUIRED
    app.post('/login', login_register.login);
    app.post('/register',login_register.register);
    app.get('/users', users.getAllUsers);
    app.get('/situations', situations.getAllSituations);
    app.get('/comments', comments.getAllComments);
    app.get('/categories', categories.getAllCategories);

    //TOKEN REQUIRED

    //USERS
    app.patch('/users/:id', verifyToken, users.editUser);
    //SITUATIONS
    app.post('/situations/addSituation', situations.addSituation);
    app.patch('/situations/editSituation/:id', situations.editSituation);
    app.delete('/situations/deleteSituation/:id', situations.deleteSituation);
    //COMMENTS
    app.post('/comments/addComment', comments.addComment);
    app.patch('/comments/editComment/:id', comments.editComment);
    app.delete('/comments/delete/:id', comments.deleteComment);
}

function verifyToken(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['token'];

    // decode token
    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, secret, function(err, decoded) {
        if (err) {
          return res.status(401).send({message: 'Token incorrect, You are not authorized to view that resource, Please log in to continue.' });
        } else {
          // if everything is good, save to request for use in other routes
          delete decoded.password;
          req.decoded = decoded;
          next();
        }
      });

    } else {

      // if there is no token
      // return an error
      return res.status(401).send({
          message: 'No Token, You are not authorized to view that resource, Please log in to continue.'
      });

    }
}
