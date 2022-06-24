<p align='center'>
    <img src="https://i.ibb.co/9n4VFC8/logo.png" width=400/>
</p>

FreeSheet
--

Effortlessly move and onboard csv data between Cortx and IPFS.

Built for the CortX 2022 hackathon.

## Inspiration

There are not a lot of great tools that support moving between a hosted instance and IPFS. I wanted to build a prototype app that made it easy to transfer csv data between IPFS and S3, and immediately import that data into a functioning jupyter notebook.

## What it does

FreeSheet is an app to help you manage the world of IPFS-hosted data sets and authorized AWS Cortx instances effectively from a web UI.

FreeSheet also 'onboards' any of your files into dynamically generated jupyter notebooks so you can start working with that data immediately.

<b>FreeSheet supports three main actions:</b>

* Upload - Upload a csv of data either directly to your CortX instance or IPFS.
* Exchange - push data sets effortlessly from your Cortx or AWS-hosted node to IPFS.
* Onboard - Onboard your IFPS data sets immediately into runnable Jupyter notebooks.

Demo: <a href="https://youtu.be/tK_bkdXqsmw" target="_blank">https://youtu.be/tK_bkdXqsmw</a>

## Running the project

FreeSheet requires both the front and backend service to be running with the access keys below available in your hosted environment.

### Client
Define the following environment variables
<pre>
    REACT_APP_STORAGE_KEY={YOUR WEB3 STORAGE KEY} # For connecting/uploading to IPFS.
</pre>

Generate a web3.storage key <a href="https://web3.storage/" target="_blank">here</a>!

From the root folder:
`yarn; yarn start`

The client (website) should now be running on port 3000.

### Server
Define the following environment variables
<pre>
    FS_S3_URL={YOUR AWS S3 SERVER URL} #  (ex: on seagate/cortx)
    FS_ACCESS_KEY={YOUR AWS ACCESS KEY} # cortx access key (for use with s3 sdk)
    FS_SECRET_KEY={YOUR AWS SECRET KEY} # cortx secret key (for use with s3 sdk)
</pre>

From the `/server` folder:
`yarn; yarn start`

The server should now be running on port 3001.

You can also create a bucket in your conncted CortX instance using the command:
`yarn create`

#### Verifying the end-to-end connection

If the front end is able to successfully connect to your running CortX or S3 instance, you should see a 'Connected' indicator here with the ability to select a bucket from the dropdown here:

<img src="./img/connected.png" width=600/>

After this, you're ready to use FreeSheet as an interface to S3 and IPFS!

## How we built it

* ReactJS
* AWS sdk with Cortx
* NodeJS

## Challenges we ran into
* Integrating csv upload with the different data sources.
* Creating a simple interface
* Plugging in variable data source urls into pre-generated notebooks

## Accomplishments that we're proud of
It works.

## What we learned
* How to connect to a running CortX instance
* Dynamically generate a Python notebook from an arbitrary hosted data URL.

## What's next for FreeSheet
* Production hosting as a service
* Or clone this repo and use it as a tool to connect to your S3 or CortX instance.
* Extend autogenerated python utilities and code based on uploaded data sets.

## Screenshots

#### Home page
<img src="./img/home.png" width=800/>

#### Upload to CortX / S3
<img src="./img/upload.png" width=800/>

#### Exchange between CortX and IPFS
<img src="./img/exchange.png" width=800/>

#### Onboard dataset to python notebook from the app
<img src="./img/onboard.png" width=800/>

#### Auto-generated python notebook
<img src="./img/notebook.png" width=800/>

## Useful links
* https://github.com/Seagate/cortx/tree/main/cortx-s3samplecode



