import React, { useState } from 'react'

function OtherInputs() {
 const [textArea, setTextArea] =  useState("")
 const [selectMenu, setSelectMenu] =  useState("USA")
 const [checked, setChecked] =  useState(false)
 const handleSubmit =(e) =>{
    e.preventDefault();
    console.log('comments',e.target[0].value);
    console.log('Country', e.target[1].value);
    console.log('checked', e.target[2]);
    
 }
  return (
    <div className=' text-center '>
        <form onSubmit={ handleSubmit}>
            <label className=' align-top'  htmlFor=''>Comments &nbsp;:</label>
            <textarea  value={textArea} onChange={(e) => setTextArea(e.target.value)} cols= "30" rows="3"></textarea>
            <br/>
            <br/>
            <label htmlFor=''>Select Country &nbsp;  :</label>
           <select value={selectMenu} onChange={(e ) => setSelectMenu(e.target.value)}>
            <option value="Canada">Canada</option>
            <option value="USA">USA</option>
            <option value="Japan">Japan</option>
            <option value="jarmani">jarmani</option>
            
           </select>
           <br/><br/>
           <label htmlFor=''> yes i agree The Terms &nbsp; </label>
           <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)}/>
          <br/><br/>
            <input  className=' bg-black text-white rounded-md p-3 m-3  px-7 text-center ' type="submit"  value="Submit" />
        </form>
    </div>
  )
}

export default OtherInputs;