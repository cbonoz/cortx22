<p align='center'>
    <img src="./img/logo.png" width=400/>
</p>

FreeSheet
--

Effortlessly move and onboard csv data between Cortx and IPFS.

Built for the Cortx 2022 hackathon.

## Inspiration

There's not a lot of great tools that support moving between a hosted instance and IPFS. I wanted to build a prototype app that made it easy to transfer csv data between IPFS and s3, and immediately import that data into a functioning jupyter notebook.

## What it does

FreeSheet is an app to help you manage the world of IPFS-hosted data sets and authorized AWS Cortx instances effectively from a web UI.

FreeSheet also 'onboards' any of your files into dynamically generated jupyter notebooks so you can start working with that data immediately.

<b>FreeSheet supports three main actions:</b>

* Upload - Upload a csv of data either directly to your cortx instance or IPFS.
* Exchange - exchange data sets effortlessly between either ipfs URL's and cortx directories.
* Access - Onboard your data sets immediately into Jupyter notebooks.

## Running the project

FreeSheet requires both the front and backend service to be running.

### Client
Define the following environment variables
<pre>
    REACT_APP_STORAGE_KEY={YOUR WEB3 STORAGE KEY}
</pre>

From the root folder:
`yarn; yarn start`

### Server
Define the following environment variables
<pre>
    FS_S3_URL={YOUR AWS S3 SERVER URL} //  (ex: on seagate/cortx)
    FS_ACCESS_KEY={YOUR AWS ACCESS KEY}
    FS_SECRET_KEY={YOUR AWS SECRET KEY}
</pre>

From the `/server` folder:
`yarn; yarn start`

## How we built it

* ReactJS
* AWS sdk with Cortx
* NodeJS

## Challenges we ran into
* Integrating csv upload with the different data sources.
* Creating a simple interface
* Plugging in variable data source url's into pregenerated notebooks

## Accomplishments that we're proud of
It works

## What we learned

## What's next for FreeSheet
* Production hosting as a service
* Or clone this repo and use as a tool to connect to your own cortx instance.

## Useful links
* https://github.com/Seagate/cortx/tree/main/cortx-s3samplecode



