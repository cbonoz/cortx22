import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { downloadNotebookFile } from '../util'

function DownloadNotebook({url}) {

    const downloadNotebook = () => {
        downloadNotebookFile(url)
    }


  return (
    <div>
        <h1>Download Notebook</h1>
        <a href={url} target="_blank">{url}</a>
        <br/>

        <Button className='standard-btn' onClick={downloadNotebook} type="primary">Download Notebook</Button>



    </div>
  )
}

export default DownloadNotebook
