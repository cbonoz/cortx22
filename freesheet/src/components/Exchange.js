import { Button, Input, Spin } from "antd";
import React, { useState, useEffect } from "react";
import CSVReader from "react-csv-reader";
import { useNavigate } from "react-router-dom";

import { getObject, listObjects, uploadRows } from "../util/api";
import { APP_NAME } from "../util/constants";
import { storeFiles } from "../util/stor";

function Exchange(props) {
  const [loading, setLoading] = useState(false);
  const [bucket, setBucket] = useState()
  // const [data, setData] = useState();
  const [error, setError] = useState()
  const [objects, setObjects] = useState()
  const [cid, setCid] = useState()
  const navigate = useNavigate()

  const list = async () => {
    if (!bucket) {
      alert('Bucket name is required')
      return
    }
    setLoading(true)

    try {
      const res = await listObjects(bucket)
      setObjects(res.data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  // Push the file from the AWS instance to IPFS.
  const pushFile = async (objectId) => {
    setLoading(true)
    let result

    try {
      // TODO: push file to IPFS and render onboard button + IPFS url.

      const obj = await getObject(bucket, objectId)

      console.log('getObject', obj)
      // result = await storeFiles([body])
      // Once file pushed to IFPS, set the active cid.
      setCid(result)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
      return;
    }


  }

  return (
    <div className="container">
      <Input prefix="Bucket:" value={bucket} onChange={e => setBucket(e.target.value)}/>
      <Button className="standard-vtn" disabled={loading} onClick={list}>Load objects</Button>
      {loading && <Spin size="large"/>}
      {objects && <div>
        {(objects || []).map((obj, i) => {
          <span key={i}>
            {JSON.stringify(obj)}
          </span>
        })}
        </div>}


        {cid && <Button type="primary" className="standard-btn" onClick={() => navigate(`/onboard/${cid}`)}>Onboard</Button>}

    
    </div>
  );
}

export default Exchange;
