const functions = require("firebase-functions");
const fs = require("fs");
const {nthNumberFibonacci} = require("./fibonacci");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.fibonacci = functions.https.onRequest((request, response) => {
  const {N: nAsString} = request.query;

  try {
    if (typeof nAsString !== "string") {
      throw "N has to be a number passed as a string";
    }
    const N = parseInt(nAsString);
    if (!isNaN(N) && N > 0 && N < 300) {
      let rawdata = fs.readFileSync("./queryHistory.json");
      let queryHistory = JSON.parse(rawdata);
      fs.writeFileSync(
        "./queryHistory.json",
        JSON.stringify({
          ...queryHistory,
          [N]: queryHistory[N] ? queryHistory[N] + 1 : 1,
        })
      );
      response.send({result: nthNumberFibonacci(N).toFixed(0)});
    } else {
      throw "N is not a valid number";
    }
  } catch (error) {
    console.log(error);
    response.status(400).send({error});
  }
});
