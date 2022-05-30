import React, {useState} from 'react'
import PropTypes from 'prop-types'
import DownloadNotebook from './DownloadNotebook'
import { ipfsUrl } from '../util'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Input } from 'antd'

function Access() {
  const {cid} = useParams()
  const [value ,setValue] = useState()
  const navigate = useNavigate()

  if (!cid) {
    return <div>
      {/* // TODO: input cid form -> redirect to /onboard/{cid} */}
      <Input prefix="Enter IPFS cid" value={value} onChange={e => setValue(e.target.value)}/>
      <Button className='standard-btn' onClick={() => navigate(`/onboard/${value}`)}>Access</Button>
    </div>
  }

  return (
    <div>
        <DownloadNotebook url={ipfsUrl(cid)} />
    </div>
  )
}

Access.propTypes = {}

export default Access
