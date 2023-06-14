// import React, { useState } from 'react'

// function FunctionInput() {
//  const [data, setData]  = useState({
//     name:"",
//     email:""
//  })

//  const  handleChange = (e) => {
//     // console.log(e.target.name)
//     // console.log(e.target.value)
//    const name= e.target.name;
//    const value= e.target.value;
//     const new_value  = (name === "email") ? value.toLowerCase() : value;
//    console.log(name,value);
//    setData( (prev) => {

//     return {
//         ...prev,[name]: new_value
//     }
//    })
//  }
//   return (
//     <div className=' text-center '>
//         <form >
//          <label htmlFor=''>Enter Name</label>
//         <input type="text" value={data.name} onChange={handleChange} name='name' placeholder='Enter your Name'/>
//         <br />
//         <br/>
//         <label htmlFor=''>Enter Email</label>
//         <input type="text" value={data.email} onChange={handleChange} name='email' placeholder='Enter your Email'/>
//         <br/>
//         <br/>
//         <input className=' bg-black text-yellow-500 rounded-md p-3 m-3' type="submit"value="Submit"/>
//         </form>
//     </div>
//   )
// }
// export default FunctionInput;




import React, { useState } from 'react'
function FunctionInput() {
   const [data, setData] = useState({
      name: "",
      lastname: "",
      email: "",
      password: ""
   })
   const handleChange = (e) => {

      const { name, value } = e.target;
      const new_value = (name === "email") ? value.toLowerCase() : value;
      console.log(e.target);
      setData((prev) => {
         return {
            ...prev, [name]: new_value
         }
      })
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(data);
   }
   return (
      <div className=' bg-black flex justify-center h-[100vh] items-center'>
         <form className='w-full h-max m-2 sm:m-0 sm:w-[700px] p-5 rounded-sm bg-gray-300'


            onSubmit={handleSubmit}>
            <h1 className=' font-bold text-green-700 text-xl mb-5 text-center'> Contact us</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2  gap-6'>
               <input className=' bg-gray-100 p-2 font-semibold  rounded-md  ' type="text"
                  name='name' value={data.name} onChange={handleChange} placeholder='First Name ' />
               <input className='bg-gray-100 p-2 font-semibold  rounded-md ' type="text" name='lastname' value={data.lastname} onChange={handleChange} placeholder='Last Name ' />
               <input className='bg-gray-100 p-2 font-semibold  rounded-md  ' type="text"
                  name='email' value={data.email} onChange={handleChange} placeholder='Email Id  ' />
               <input className='bg-gray-100 p-2 font-semibold  rounded-md ' type="text" name='password' value={data.password} onChange={handleChange} placeholder='Password  ' />
            </div>
            <form className=' text-center'>
               <div className='m-3 p-3'>
                  <label className=' align-top' htmlFor=''>Comments :</label>
                  <textarea cols="30" rows="3"></textarea>
               </div>
               <br />
               <br />
               <div className=' text-center justify-center'>
                  <label htmlFor=''>Select Country  :</label>
                  <select >
                     <option value="Canada">Canada</option>
                     <option value="USA">USA</option>
                     <option value="Japan">Japan</option>
                     <option value="jarmani">jarmani</option>

                  </select>
               </div>
               <br /><br />
               <label htmlFor=''> yes i agree The Terms &nbsp; </label>
               <input type="checkbox" />
               <br /><br />

            </form>
            <div className=' text-center'>
               <input className=' bg-black text-yellow-500 rounded-md p-3 m-3 ' type="submit" value="Submit" />
            </div>
         </form>
      </div>
   )
}
export default FunctionInput;



