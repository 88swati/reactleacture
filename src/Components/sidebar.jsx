import React from 'react'
import { sidebarList } from '../staticLink';
const sidebar = () => {
  return (
    <div className='w-1/6'>
     <ul>
     {sidebarList .map((item) => {
      return <li className=' p-3'>{item}</li>
      })}
     </ul>
    </div>
  )
}

export default sidebar;
