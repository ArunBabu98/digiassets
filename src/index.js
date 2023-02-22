const aws = require("./aws");
const utxo = require("./utxo");
const prescision = require("./precision");
const request = require("request");
const fs = require("fs");

async function fetch(url) {
  let options = { json: true };
  request(url, options, (error, res, body) => {
    if (error) {
      return console.log(error);
    }

    if (!error && res.statusCode == 200) {
      console.log(body);
    }
  });
}

async function run(address) {
  // fetch Address UTXOs
  // var fetchedUtxos = utxo.getUTXO(address);
  var h = prescision.makeFixedPrecision(150)
  console.log(h);
  // var url = await aws.getURL(address);
  // console.log(url);
  // await fetch(url);
}

run("D5ASn4qEgHJkiVzFZCMfa8VkyP1exsoQH8");
