import React from 'react'
import { MoonLoader } from 'react-spinners'

export const Loading = () => {
  return (
    <div >
<MoonLoader color="#151b2c"  cssOverride={{
    position:"absolute",
    left:'50%',
    top:'50%',
    background:"#3ABBC9",
    borderRadius:"100px"
    
  }} />
    </div>
  )
}
