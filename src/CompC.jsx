import React, { useContext } from 'react'
import { NameContext } from './App';
import { ChannelContext } from './App';

function CompC() {
const myName = useContext(NameContext)
const myChannelName = useContext(ChannelContext)
  return (
    <div>
        <h1> i am comp c</h1>
        <h1>{myName}</h1>
        <h1>{myChannelName}</h1>
    </div>
  )
}
export default CompC;