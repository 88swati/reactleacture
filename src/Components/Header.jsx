import React from 'react'

const Header = () => {
  return (
    // <header className='App-header p-3 items-center   flex'>
    //   <div>
    //   <img className='  w-8 h-6' src='https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/15211315791553239378-512.png' alt="Humbergermenu" />
    //   <img className='  w-24 ml-5' src='https://www.ourgcc.com/Content/files/YOUTUBETAB.jpg' alt="Logo" />
    //   </div>
    //   <div className=' flex'>
    //     <input className='p-3 border h-10 mx-auto w-1/3  rounded-3xl  border-slate-400 ' placeholder='Search' />
    //     <img className=' w-4' src="https://th.bing.com/th/id/OIP.RF8hdNm5eOnLDpG_GSu5NwHaHN?pid=ImgDet&rs=1" alt="icons" />
    //   </div>
    //   <img className='  w-10 rounded-3xl' src="https://www.pngkit.com/png/detail/281-2812821_user-account-management-logo-user-icon-png.png" alt="logo" />
    // </header>
    <div className=''>
     <div className='left px-3 py-3 mt-3  inline-flex '>
     <img className='   w-8 h-6  ' src='https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/15211315791553239378-512.png' alt="Humbergermenu" />
       <img className='  w-24 ml-3 h-6 ' src='https://www.ourgcc.com/Content/files/YOUTUBETAB.jpg' alt="Logo" />
     </div>
     <div className='mid' >
        <div className=' flex'>
        <input className='p-3 border h-10 mx-auto w-1/3  rounded-3xl  border-slate-400 ' placeholder='Search' />
      <img className=' w-4' src="https://th.bing.com/th/id/OIP.RF8hdNm5eOnLDpG_GSu5NwHaHN?pid=ImgDet&rs=1" alt="icons" />
       </div>
     </div>
     <div className='right'> 

     </div>
    </div>
  )
}
export default Header;
