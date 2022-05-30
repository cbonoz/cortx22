import { S3 } from "./cortx.js";

// Must ignore cert errors due to Cortx certs
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const BUCKET_NAME = "freesheet" // Customize name

// Create a bucket
async function createBucket(Bucket) {
  console.log("Creating a bucket:" + BUCKET_NAME);
  const bucketRequest = S3.createBucket({ Bucket, CreateBucketConfiguration: { LocationConstraint: ""}});
  let createBucketResults = await bucketRequest.promise();
  console.log("created bucket: " + JSON.stringify(createBucketResults));
}

createBucket(BUCKET_NAME)
