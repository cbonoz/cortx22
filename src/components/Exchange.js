import { Button, Input, Spin } from "antd";
import React, { useState, useEffect } from "react";
import CSVReader from "react-csv-reader";

import { listObjects, uploadRows } from "../util/api";
import { APP_NAME } from "../util/constants";

function Exchange(props) {
  const [loading, setLoading] = useState(false);
  const [bucket, setBucket] = useState()
  // const [data, setData] = useState();
  const [error, setError] = useState()
  const [objects, setObjects] = useState()

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

    
    </div>
  );
}

export default Exchange;
