import React, {useState} from 'react'
import PropTypes from 'prop-types'
import DownloadNotebook from './DownloadNotebook'
import { ipfsUrl } from '../util/stor'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Input } from 'antd'

function Onboard() {
  const {cid, fName} = useParams()
  const [value ,setValue] = useState(cid)
  const [fileName ,setFileName] = useState(fName)
  const navigate = useNavigate()

  if (!cid || !fileName) {
    return <div className='container'>
      {/* // TODO: input cid form -> redirect to /onboard/{cid} */}
      <Input prefix="Enter IPFS cid:" value={value} onChange={e => setValue(e.target.value)}/>
      <Input prefix="Enter filename:" value={fileName} onChange={e => setFileName(e.target.value)}/>
      <Button className='standard-btn' onClick={() => navigate(`/onboard/${value}/${fileName}`)}>Onboard</Button>
    </div>
  }

  return (
    <div className='container'>
        <DownloadNotebook cid={cid} fileName={fName}/>
    </div>
  )
}

Onboard.propTypes = {}

export default Onboard
