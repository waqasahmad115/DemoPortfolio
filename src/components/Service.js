import React from 'react'
import LineIcon from 'react-lineicons'
import { useMotionValue, useTransform, motion } from 'framer-motion'

function Service(props) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [100, -100], [-30, 30])
  return (
    <div style={{ perspective: 2000 }}>
      <motion.div
        className="mi-service"
        style={{ x, y, rotateX, rotateY, z: 100, borderRadius: '8px', margin: '5px' }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileHover={{
          scale: 0.9,
          transition: { duration: 1 },
          backgroundColor: '#ba4c72',
        }}
      >
        <span className="mi-service-icon">
          <LineIcon name={props.content.icon} />
        </span>
        <h6 style={{ fontWeight: 'bold' }}>{props.content.title}</h6>
        <p style={{ fontSize: '1rem', fontWeight: 'bold' }}> {props.content.details}</p>
        <br />
        <h6 style={{ fontWeight: 'bold' }}>From:</h6>
        <ul>
          {props.content.usedAt.map((location) => (
            <li style={{ fontSize: '14px' }}>{location}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default Service
