import AWS from 'aws-sdk'

// Must ignore cert errors due to Cortx certs
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const PORT = 31949

let s3Endpoint = `http://${process.env.FS_S3_URL}:${PORT}`
let s3AccessKeyID = process.env.FS_ACCESS_KEY;
let s3SecretAccessKey = process.env.FS_SECRET_KEY;

// const REGION = ['us-east-1', 'us-east-2','us-west-1','us-west-2',]

const  endpoint = new AWS.Endpoint(s3Endpoint);
endpoint.port = PORT
// endpoint.protocol = 'http'
const credentials = new AWS.Credentials(s3AccessKeyID, s3SecretAccessKey);
// const region = 'us-east-1' // "us-east-1";
export const S3 = new AWS.S3({endpoint, credentials, s3ForcePathStyle: true, apiVersion: '2006-03-01'});
// S3.config.region = undefined
console.log('init server', S3.config.region, s3Endpoint, s3AccessKeyID.substring(0, 4), s3SecretAccessKey.substring(0,4));

// Example data.
// let testBucketName = "testbucket"; // Bucket
// let testObjectName = "testobject.txt"; // Key
// let testObjectData = "...some random data..."; // Body

const FILE_BASE = `files/`

const getKey = key => `${FILE_BASE}${key}`

// List objects
export const listObjects = async (Bucket) => {
  console.log("Listing objects...");
  let listObjectsResults = await S3.listObjects({ Bucket, Prefix: FILE_BASE }).promise();
  console.dir(listObjectsResults);
  return listObjectsResults;
};

export const getObject = async (Bucket, key) => {
  // Get an object
  console.log("Getting an object...");
  let getObjectResults = await S3.getObject({ Bucket, Key: getKey(key) }).promise();
  console.dir(getObjectResults);
  return getObjectResults;
};

export const putObject = async (Bucket, key, Body) => {
  // Put an object
  console.log("Putting an object...");
  let putObjectResults = await S3.putObject({ Bucket, Key: getKey(key), Body }).promise();
  console.dir(putObjectResults);
  return putObjectResults;
};

export const deleteObject = async (Bucket, key) => {
  // Delete an object
  console.log("Deleting an object...");
  let deleteObjectResults = await S3.deleteObject({ Bucket, Key: getKey(key) }).promise();
  console.dir(deleteObjectResults);
  return deleteObjectResults;
};
