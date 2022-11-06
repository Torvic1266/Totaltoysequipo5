const user = require('./User');
function userLoggedMiddleware(req, res, next){   
res.locals. isLogged = false;

let emailIncookie = req.cookies.userEmail;
let userFroncookie = user.findByField('email', emailIncookie);
if (userFroncookie) {
    req.session.userLogged = userFroncookie;
}

if (req.session.userLogged){
    res.locals. isLogged = true;
    res.locals.userLogged = req.session.userLogged;
}

next();

}

module.exports = userLoggedMiddleware;