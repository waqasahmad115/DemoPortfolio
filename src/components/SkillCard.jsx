import React,{useState} from 'react'
import ProgressiveImage from 'react-progressive-image';
import LineIcon from "react-lineicons";
import { motion } from 'framer-motion';

const SkillCard = ({ skill }) => {
  return (
    <div className="skill_Card"   
   >
      <div className="face face1" style={{height:"160px"}}>
        <div className="content"  >
             <motion.img src={skill.icon} alt="My Image"       
             whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, -5, 5, -5, 0],
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0.2,
              },
            }}
                  whileTap={{ scale: 0.9, rotateZ: 5 }}
              style={{ height: '80px', width: '100px' , resizeMode: 'cover', originX: 0.5, originY: 0.5}}
            />
  
          <h3>
            {skill.title}
          </h3>
        </div>
      </div>
      <div className="face face2" style={{height:"160px"}}>
        <div className="content">
          <p style={{fontSize:'1.2rem', fontWeight:'bold',  }}   >
            Experience: {skill.years} Years
          </p>
        </div>
      </div>
    </div>
  )
}
export default SkillCard