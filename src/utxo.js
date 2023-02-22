// https://digibyteblockexplorer.com/api/utxo/D5ASn4qEgHJkiVzFZCMfa8VkyP1exsoQH8

const request = require("request");

function getUTXO(address) {
  let options = { json: true };
  var url = `https://digibyteblockexplorer.com/api/utxo/${address}`;
  request(url, options, (error, res, body) => {
    if (error) {
      return console.log(error);
    }
    if (!error && res.statusCode == 200) {
      console.log(body);
    }
  });
}

module.exports = { getUTXO };
