import React from 'react'
import './Header.css'
import headerimage from '../assets/pexels-guillaume-meurice-1591447 (1).jpg'
import video from '../assets/Pexels Videos 2811.mp4'
import {TiWeatherWindyCloudy}  from 'react-icons/ti'
import { useState } from 'react'
import axios from "axios";
import secondimage from '../assets/pexels-pixabay-162389.jpg'
import Footer from './Footer'





const Header = () => {
const [locationentered,SetLocationentered]=useState('')
const [userslist,SetUserslist]=useState([])
const [data,SetData]=useState('')
const [currentcountry,SetCurrentcountry]=useState('')
const [temperatures,SetTemperatures]=useState([])


const url=`https://api.openweathermap.org/data/2.5/weather?q=${locationentered}&units=metric&appid=c332caa8051184d4614a111f86ee23ea`


const handlesubmit=()=>{
  

  userslist.push(locationentered)
  SetCurrentcountry(locationentered)

 

  SetLocationentered('')




  axios.get(url).then((response)=>{
    SetData(response.data)
    
    temperatures.push(data.main.temp)
    
    })
    


}





  return (
    <div className="headercontainer">
      <div className="thevideo">
         <video autoPlay loop muted id="video">
          <source src={video} type='video/mp4' />
         </video>
      </div>
      <div className="firstpart">
        <div className="icon-header">
        <div className="icon">
        <TiWeatherWindyCloudy style={{color:'white',fontSize:'40px',} }/>
        </div>
      
      WeatherCast
        </div>
        

      </div>
      
      
      
<div className='secondcontainer'>
<img src={secondimage} alt="/" />

<div className="displaying-the-weather-3">
<p className='thetext'>Wind speed In {currentcountry}</p>

{data.main ? <h1 className='h1'>{data.wind.speed} m/s</h1>:null}

</div>


<div className="displaying-the-weather-4">
<p className='thetext'>Temperature In {currentcountry} feels like</p>

{data.main ? <h1 className='h1'>{data.main.feels_like} °C
</h1>:null}

</div>



<div className="displaying-the-weather">
<p className='thetext'>Current Temperature In {currentcountry}</p>

{data.main ? <h1 className='h1'>{data.main.temp} °C
</h1>:null}

</div>








<div className="displaying-the-weather-2">
<p className='thetext'>Humidity In {currentcountry}</p>

{data.main ? <h1 className='h1'>{data.main.humidity}%</h1>:null}

</div>








<div className="weathertodolist">
      <p>Please Enter Desired weather Location</p> 
      <input className="headerinputfield" type="text" value={locationentered} onChange={(e)=>SetLocationentered(e.target.value)}placeholder="Location"  />
      <button className="submit-button" onClick={handlesubmit}>Submit</button>
      <div className="userslistd">
        <div className="boxx"><p className='auu'>Choosen Locations</p> <p className='auu'>There Temp in °c</p></div>
        <div class="usersslistcontainer">
       <div className="Theuserslist">
      {userslist.map((location)=>
      <div className="userslistcontainer"><li className="listeditems" key={location}>{location}</li></div>
      )
      
      
      }






       </div>
       
       <div className="secondbox">
      
        {temperatures.map((tempp)=>
<li>{tempp}</li>
)}
        </div>

        </div>

      </div>



      </div>


<Footer />

</div>



      </div>
  )
}

export default Header