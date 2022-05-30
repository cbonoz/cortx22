import { Spin } from "antd";
import React, { useState, useEffect } from "react";
import CSVReader from "react-csv-reader";

import { putObject, uploadRows } from "../util/api";
import { APP_NAME, DATA_FILE_NAME, DEFAULT_BUCKET } from "../util/constants";
import { ipfsUrl, storeFiles } from "../util/stor";
import DownloadNotebook from "./DownloadNotebook";

function UploadPage(props) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [bucket, setBucket] = useState(DEFAULT_BUCKET)
  const upload = async (data, fileInfo, originalFile) => {
    console.log("upload", data, fileInfo, originalFile);
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
      alert(e.toString());
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

      {/* {cid && <div>
        <hr/>
        <DownloadNotebook url={ipfsUrl(cid)}/>
      </div>} */}

    </div>
  );
}

export default UploadPage;
