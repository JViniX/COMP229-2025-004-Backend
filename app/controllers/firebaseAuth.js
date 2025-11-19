const firebase = require('firebase-admin');

module.exports.requireSign = function (req, res, next) {

    let token = req.header('Authorization').substr(7);

    firebase.auth().verifyIdToken(token, true)
        .then((decodedToken) => {
            console.log(decodedToken);
            req.auth = decodedToken;
            next();
        })
        .catch((error) => {
            // Handle error
            console.log(error);
            res.status(401).json({
                success: false,
                message: error.message
            });
        });

}

module.exports.logtoken = async function (req, res, next) {
    console.log(req.headers);
    next();
}