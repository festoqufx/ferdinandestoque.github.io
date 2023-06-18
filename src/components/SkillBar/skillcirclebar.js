import React from 'react'
import "../SkillBar/skillcirclebar.css"
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function SkillCircleBar({percentagelang,lang,pathcolor,textcolor,trailColor}) {

  return (
    <div>
        <div className='mt-3 mr-4'>
        <CircularProgressbar
        value={percentagelang}
        text={`${percentagelang}% ${lang}`}
        styles={buildStyles({
          textColor: textcolor,
          pathColor: pathcolor,
          trailColor: trailColor,
          textSize:12
        })}
      />
        </div>
    </div>

  )
}
// TODO: note percentage , pathcolor,textcolor,trailcolor,strokelinecap  all will be dynamic from skillsapi
 


