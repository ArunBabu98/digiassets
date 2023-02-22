const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

var accessKeyId = process.env.ACCESS_KEY;
var secretAccessKey = process.env.SECRET_KEY;

const AWS = require("aws-sdk");

// Key can be transctionID, AssetID or address
async function getURL(key) {
  var signer = new AWS.S3({
    accessKeyId,
    secretAccessKey,
    signatureVersion: "v4",
    region: "ca-central-1",
  });

  var params = {
    Bucket: "chaindata-digibyte",
    Key: key,
    Expires: 300,
    RequestPayer: "requester",
  };

  var url = signer.getSignedUrl("getObject", params);

  return url;
}

module.exports = { getURL };
