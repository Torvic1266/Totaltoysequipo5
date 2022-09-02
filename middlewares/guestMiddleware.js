function guestMiddleware (req, res, next) {
        if (req.session.userLogged) {
            return res.redirect('/usuario/profile');
        }
        next();
    }    
module.exports = guestMiddleware