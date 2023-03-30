import React from 'react'
import { useMotionValue, useTransform, motion } from 'framer-motion'
function Resume(props) {
  const { year, position, graduation, university, company, details } = props.resumeData
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [100, -100], [-30, 30])

  return (
    <motion.div
      className="mi-service"
      style={{ x, y, rotateX, rotateY, z: 100, borderRadius: '8px', margin: '5px' }}
      drag
      dragElastic={0}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileHover={{
        scale: 0.9,
        transition: { duration: 1 },
        backgroundColor: '#ff0057',
      }}
    >
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year">{year}</h6>
      </div>
      <div className="mi-resume-details">
        <h5>{position || graduation}</h5>
        <h6 className="mi-resume-company">{company || university}</h6>
        <p>{details}</p>
      </div>
    </motion.div>
  )
}

export default Resume