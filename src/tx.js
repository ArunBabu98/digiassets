const digibyte = require("digibyte-js");
const Transaction = require("digibyte-js/lib/transaction/transaction");

var utxo = [
  {
    txid: "b95c5c0990f69e8f35a813fbb5b9cc8465265e85221b8c5bb32ad5be2133dbbe",
    vout: 2,
    amount: "0.01884868",
    satoshis: 1884868,
    scriptPubKey: "76a91400414f52cf4b3c34b516b0022436e6b96d57480488ac",
  },
  {
    txid: "b95c5c0990f69e8f35a813fbb5b9cc8465265e85221b8c5bb32ad5be2133dbbe",
    vout: 0,
    amount: "0.000006",
    scriptPubKey: "76a91400414f52cf4b3c34b516b0022436e6b96d57480488ac",
    "quantity":750,

  },
];

// ------------- TRANSFER TX -------------
var tx = new Transaction()
  .from(utxo)
  .to("D9goxrTJ2iYt4wmDVdrkweHgcRoQLjtcvn", 600) // 0010000000100010  2022
  .to("DFtE8rQmzfKugaATpfCFZQ2EyudZB3QGfK", 600) // 0010001101110001  2371
  .addData(Buffer.from("44410315002022012371", "hex"))
  .change("D5ASn4qEgHJkiVzFZCMfa8VkyP1exsoQH8")
  .sign("KyxqjtX4948dJFh5Fc5fbvY8a2hkgCFu48qGHcLunGVjDCRE3PcU")
  .serialize();

// ------------- BURN TX -------------
var tx = new Transaction()
  .from(utxo)
  .to("D5ASn4qEgHJkiVzFZCMfa8VkyP1exsoQH8", 600) // 0010000001110010  2072
  // 0010000110010001  2191
  .addData(Buffer.from("444103250020721F20F1", "hex"))
  .change("D5ASn4qEgHJkiVzFZCMfa8VkyP1exsoQH8")
  .sign("KyxqjtX4948dJFh5Fc5fbvY8a2hkgCFu48qGHcLunGVjDCRE3PcU")
  .serialize();

console.log(tx);
