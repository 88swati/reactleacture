import React from 'react'

function Students({std}) {
  return (
    <div>
        <h1>i am {std.name} and i am {std.age} year old.</h1>
    </div>
  )
}

export default Students;