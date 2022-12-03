import React from 'react'
import logo from './404.png'

// Modifikasi halaman berikut untuk menjadi halaman 404 yang menarik!
const NotFound = () => {
  return (
    <div style={{backgroundColor: 'black', margin:'auto', width:'50%', height:'50%', textAlign:'center'}}>
      <img src={logo} style={{width: '50%', height:'50%'}}></img>
      <h1 style={{ color:'white', padding:'50px', textAlign:'center', fontFamily:'papyrus'}}>!!! Halaman tidak ditemukan !!!</h1>
      <a href="/login" target="_blank">
      <button style={{ color:'black', padding:'5px',background:'grey', fontWeight:'bold', borderRadius:'30px'}}>reload</button>
</a>
</div>
    )
}

export default NotFound