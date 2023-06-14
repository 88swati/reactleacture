import React from 'react'
import { TagList } from '../staticLink'
const Tags = () => {
  return (
    
        <ul className='  flex '>
     {TagList .map((item) => {
      return <li className=' bg-gray-100 px-2 py-1 rounded-md mr-2'>{item}</li>
      })}
     </ul>
    
  )
}

export default Tags;