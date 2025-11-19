var admin = require("firebase-admin");
let config = require('./config');

module.exports = function(){
    
    admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(process.env.GOOGLE_SERVICES_ACCOUNT))
    });

    console.log('====> Connected to Firebase.');
}


