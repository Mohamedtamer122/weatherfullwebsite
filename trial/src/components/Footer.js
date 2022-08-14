import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FaFacebookMessen} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footercontainer'>
      <div className="footerfirstpart">
       <p> ⒸCopyrights 2022 All Rights Reserved</p>
       <p>Made-by-Mohamed Tamer</p>
      </div>

      <div className="Alltheicons">
       

        <h3><BsFacebook /></h3>
        <h3><IoLogoWhatsapp /></h3>
        <h3><FaInstagramSquare /></h3>
        <h3><BsGithub /></h3>


      </div>





      </div>
  )
}

export default Footer