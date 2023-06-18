import React from 'react'
import "../AboutMe/aboutme.css"


import img1 from "../../images/Aboutmenewparallax/CodeP.png"
import img2 from "../../images/Aboutmenewparallax/EducationP.png"
import img3 from "../../images/Aboutmenewparallax/GamesP.png"
import img4 from "../../images/Aboutmenewparallax/LaptopP.png"
import img5 from "../../images/Aboutmenewparallax/LifeP.png"
import img6 from "../../images/Aboutmenewparallax/TravelP.png"
import img7 from "../../images/Aboutmenewparallax/DogP.png"
import img8 from "../../images/Aboutmenewparallax/AkaP.png"
import img9 from "../../images/Aboutmenewparallax/MusicP.png"

// import AboutmeSVG from '../SVGanimations/aboutmeSvg'
import AboutmeCube from '../CubeAnimations/AboutmeCube'

class AboutMe extends React.Component {
    state = {x:0,y:0}
    mouse_move = (e) =>{
        this.setState({x:e.clientX,y:e.clientY})
        document.querySelectorAll(".object").forEach(object =>{
            const speed = object.getAttribute("data-value");

            const x = (window.innerWidth - e.pageX*speed)/100             
            const y = (window.innerHeight - e.pageY*speed)/100

    
            object.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
        
    }
  render() {
    

   
    return (
        <div className='aboutmeback' >
             
        <div className="home-container">
            <div className='mt-14 flex justify-center text-center p-3' style={{ color: 'white'}}>
				<h2>ABOUT ME</h2>
                {/* <AboutmeSVG /> */}
            </div>
            <div className='container-p' onMouseMove={this.mouse_move} >
                {/* start coding here */}
                {/* <h2 className='object' data-value="3">Cube<br></br><span>Design</span></h2> */}

                <div className='cube-wrap'>
                    <AboutmeCube />
                </div>
                
                

                <img src={img1} className='object' data-value="-2" alt="image"></img>
                <img src={img2} className='object' data-value="6" alt="image"></img>
                <img src={img3} className='object' data-value="4" alt="image"></img>
                <img src={img4} className='object' data-value="-6" alt="image"></img>
                <img src={img5} className='object' data-value="8" alt="image"></img>
                <img src={img6} className='object' data-value="-4" alt="image"></img>
                <img src={img7} className='object' data-value="5" alt="image"></img>
                <img src={img8} className='object' data-value="-3" alt="image"></img>
                <img src={img9} className='object' data-value="-2" alt="image"></img>
                
                
            </div>
            
        </div>
        <div className='abt-container  p-5'>
            <p className='text-center text-2xl text-black'>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Diam volutpat commodo sed egestas egestas fringilla. Ultrices sagittis orci a scelerisque purus semper eget. Tincidunt tortor aliquam nulla facilisi. Est placerat in egestas erat imperdiet sed. Eget duis at tellus at urna condimentum mattis. Suspendisse sed nisi lacus sed. Nulla facilisi morbi tempus iaculis urna id. Vel eros donec ac odio. Vitae ultricies leo integer malesuada. Purus sit amet volutpat consequat mauris. Ut faucibus pulvinar elementum integer enim neque. Lorem dolor sed viverra ipsum. Eget velit aliquet sagittis id consectetur purus ut. Dignissim convallis aenean et tortor at. Sit amet dictum sit amet justo. Non odio euismod lacinia at quis risus. Nunc lobortis mattis aliquam faucibus.
            </p>
        </div>
        </div>
    )
    
  }
}

export default AboutMe

// I am 19 year old, <span className='text-slate-400'>CSE-AI</span> Student studing in <span className='text-cyan-400 hover:scale-x-150'>Jain University,Bangalore</span>.I <br></br>
//                         really enjoying solving problems as well as making things pretty and easier 
//                         to use.I can't stop learning. <br></br>
//                         <span className='text-blue-400'> New things; The more; The better. </span>