import { Button, Input, Spin, Table } from "antd";
import React, { useState, useEffect } from "react";
import CSVReader from "react-csv-reader";
import { useNavigate } from "react-router-dom";
import { getFileName } from "../util";

import { getObject, listObjects, uploadRows } from "../util/api";
import { APP_NAME, DEFAULT_BUCKET } from "../util/constants";
import { storeFiles } from "../util/stor";

function Exchange(props) {
  const [loading, setLoading] = useState(false);
  const [onboardLoading, setOnboardLoading] = useState(false)
  const [bucket, setBucket] = useState(DEFAULT_BUCKET)
  // const [data, setData] = useState();
  const [error, setError] = useState()
  const [objects, setObjects] = useState()
  const [cid, setCid] = useState()
  const [fileName, setFileName] = useState()
  const navigate = useNavigate()

  const list = async () => {
    if (!bucket) {
      alert('Bucket name is required')
      return
    }
    setLoading(true)

    try {
      const res = await listObjects(bucket)
      const files = res.data.Contents
      console.log('files', files)
      setObjects(files)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  // Push the file from the AWS instance to IPFS.
  const pushFile = async (objectEntry) => {
    setOnboardLoading(true)
    let result
    const fName = getFileName(objectEntry.Key)
    console.log('pushFile', bucket, fName)

    try {
      // TODO: push file to IPFS and render onboard button + IPFS url.

      const obj = await getObject(bucket, fName)

      console.log('getObject', obj)
      const contents = obj.data.Body.data.map(x => String.fromCharCode(x));
      const newFile = new File(contents, fName)

      result = await storeFiles([newFile]);
      // Once file pushed to IFPS, set the active cid.
      setCid(result)
      setFileName(fName)
    } catch (e) {
      console.error(e)
    } finally {
      setOnboardLoading(false)
      return;
    }
  }

    const columns = [
      {
        title: 'Key',
        dataIndex: 'Key',
        key: 'Key',
      },
      {
        title: 'Last Modified',
        dataIndex: 'LastModified',
        key: 'LastModified',
      },
      {
        title: 'Size (bytes)',
        dataIndex: 'Size',
        key: 'Size',
      },
      {
        title: 'Onboard',
        key: 'onboard',
        render: r => {
          return <Button loading={onboardLoading} disabled={onboardLoading} onClick={() => pushFile(r)}>Onboard</Button>
        }
      },
    ];

  return (
    <div className="container">
      <Input prefix="Bucket:" value={bucket} onChange={e => setBucket(e.target.value)}/>
      <Button type="primary" className="standard-btn" disabled={loading} onClick={list}>Load objects</Button>
      <Table loading={loading} dataSource={objects || []} columns={columns} />


        {cid && <Button type="primary" className="standard-btn" onClick={() => navigate(`/onboard/${cid}/${fileName}`)}>View IPFS Entry</Button>}

    
    </div>
  );
}

export default Exchange;
