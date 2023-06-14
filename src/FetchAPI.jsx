import { Result } from 'postcss';
import React, { useEffect, useState } from 'react'
function FetchAPI() {
const [posts,setPosts] = useState([]);
useEffect(() =>{
    fetch ("https://jsonplaceholder.typicode.com/posts")
.then((Response) =>{
   Response.json().then((Result) =>{
    setPosts(Result);
   })
})

});
return (
    <div>
        <ul>
            {
                posts.map(pst =>{
                    return (
                        <>
                        <li>{pst.id}</li>
                        <li>{pst.title}</li>
                        </>
                    )
                })
            }
        </ul>
    </div>
  )
}
export default FetchAPI;