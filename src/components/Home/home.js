import React,{useState,useEffect} from 'react'
import "../Home/home.css"
import homeimg from "../../images/newhome.png"
// import AnimatedLetters from './Animatedletters'
import Typewriter from 'typewriter-effect';
// import { TarunSvg } from '../SVGanimations/tarunSvg';

export default function Home() {
    const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['R', 'A', 'V', 'E', 'N']
  
  

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
   <>
   <div>
    {/* newone */}
    <div className='home-row'>
      <div className='home-col1'>
          <h1>Yo Yo!<br></br>I am</h1>
          <div className='home-row1'>
			{/* <TarunSvg/> */} <h1 style={{fontSize: 150, color: 'white' }}>RAVEN</h1>
		  
		  </div>
          <h3>
          <Typewriter 
            options={{
                strings: ['Web Designer', 'Coder','Frontend','Software Developer', 'FullStack Developer','Gamer'],
                autoStart: true,
                loop: true,
                cursor:'#',
            }}
            />
          </h3>
      </div>
      <div className='home-col2'>
        <img src={homeimg} className="home-img" />
      </div>
    </div>
   </div>
   </>
  )
}
