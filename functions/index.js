const functions = require("firebase-functions");
const fs = require("fs");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  let rawdata = fs.readFileSync("./previousQueries.json");
  response.send(rawdata);
});
