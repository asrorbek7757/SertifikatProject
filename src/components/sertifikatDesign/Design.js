import React from 'react'
import "./Design.css"
import rasm from '../../assets/2d.jpg'
import img from '../../assets/svf.jpg'
import picter from '../../assets/err.jpg'
import poster from '../../assets/de.jpg'
import png from '../../assets/hjk.jpg'
import svg from '../../assets/deda.jpg'
function Design() {
  return (
    <div className='design'>
    <div className="design-sertifikat"><img className='rasm-design' src={rasm} alt="" /></div>
    <div className="design-sertifikat"><img className='rasm-design' src={img} alt="" /></div>
    <div className="design-sertifikat"><img className='rasm-design' src={picter} alt="" /></div>
    <div className="design-sertifikat"><img className='rasm-design' src={poster} alt="" /></div>
    <div className="design-sertifikat"><img className='rasm-design' src={png} alt="" /></div>
    <div className="design-sertifikat"><img className='rasm-design' src={svg} alt="" /></div>
    <button className="tugma-design"><a style={{ textDecoration: "none", color: "white"}} href="/">Orqaga qaytish</a></button>
    </div>
  )
}

export default Design