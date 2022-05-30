import { Spin } from "antd";
import React, { useState } from "react";
import CSVReader from "react-csv-reader";

import { putObject } from "../util/api";
import { DEFAULT_BUCKET } from "../util/constants";

function UploadPage(props) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [bucket, setBucket] = useState(DEFAULT_BUCKET)
  const [error ,setError] = useState()
  const upload = async (data, fileInfo, originalFile) => {
    console.log("upload", data, fileInfo, originalFile);
    setError(undefined)
    setLoading(true);
    try {
      // const [keys, ...values] = data;
      // const rows = values.map((array) =>
      //   array.reduce((a, v, i) => ({ ...a, [keys[i]]: v }), {})
      // );

      // const body = { rows };
      // const renamedFile = new File([originalFile], DATA_FILE_NAME)

      // const result = await storeFiles([renamedFile]);
      const res = await putObject(bucket, originalFile)
      setData(res.data)
    } catch (e) {
      const msg = `Error uploading file: ${e.toString()}`
      setError(msg)
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Upload new CSV data</h1>
      <p></p>
      <CSVReader onFileLoaded={upload} />
      {data && (
        <div className="success">Successfully uploaded:<br/>
        <pre>
          {JSON.stringify(data, null, '\t')}
        </pre>
        </div>
      )}
      <br/>
      {error && <p className="error-text">{error}</p>}

      {/* {cid && <div>
        <hr/>
        <DownloadNotebook url={ipfsUrl(cid)}/>
      </div>} */}

    </div>
  );
}

export default UploadPage;
