const AWS = require("aws-sdk");

// Must ignore cert errors due to Cortx certs
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

let s3Endpoint = process.env.FS_S3_URL;
let s3AccessKeyID = process.env.FS_ACCESS_KEY;
let s3SecretAccessKey = process.env.FS_SECRET_KEY;
console.log('init server', s3Endpoint, s3AccessKeyID.substring(0, 4), s3SecretAccessKey.substring(0,4));

let S3 = new AWS.S3();
S3.config.s3ForcePathStyle = true;
S3.config.credentials = new AWS.Credentials(s3AccessKeyID, s3SecretAccessKey);
S3.endpoint = s3Endpoint;

// let testBucketName = "testbucket"; // Bucket
// let testObjectName = "testobject.txt"; // Key
// let testObjectData = "...some random data..."; // Body

// List objects
export const listObjects = async (Bucket) => {
  console.log("Listing objects...");
  let listObjectsResults = await S3.listObjects({ Bucket }).promise();
  console.dir(listObjectsResults);
  return listObjectsResults;
};

export const getObject = async (Bucket, Key) => {
  // Get an object
  console.log("Getting an object...");
  let getObjectResults = await S3.getObject({ Bucket, Key }).promise();
  console.dir(getObjectResults);
  return getObjectResults;
};

export const putObject = async (Bucket, Key, Body) => {
  // Put an object
  console.log("Putting an object...");
  let putObjectResults = await S3.putObject({ Bucket, Key, Body }).promise();
  console.dir(putObjectResults);
  return putObjectResults;
};

export const deleteObject = async (Bucket, Key) => {
  // Delete an object
  console.log("Deleting an object...");
  let deleteObjectResults = await S3.deleteObject({ Bucket, Key }).promise();
  console.dir(deleteObjectResults);
  return deleteObjectResults;
};
