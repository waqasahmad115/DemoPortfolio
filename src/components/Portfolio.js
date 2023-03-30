import FsLightbox from 'fslightbox-react'
import React, { useState } from 'react'
import * as Icon from 'react-feather'
import ProgressiveImage from 'react-progressive-image'
import { motion } from 'framer-motion'
function Portfolio(props) {
  const [toggler, setToggler] = useState(false)
  const { title, subtitle, imageUrl, largeImageUrl, url } = props.content

  const handleToggler = (value) => {
    setToggler(value)
  }

  return (
    <motion.div
      className="mi-portfolio mi-portfolio-visible mi-service"
      whileHover={{
        scale: 0.9,
        transition: { duration: 1 },
        backgroundColor: '#ba4c72',
      }}
    >
      <div className="mi-portfolio-image">
        <ProgressiveImage src={imageUrl} placeholder="/images/portfolio-image-placeholder.png">
          {(src) => <img src={src} alt={title} />}
        </ProgressiveImage>
        <ul>
          {!largeImageUrl ? null : (
            <li>
              <button onClick={() => handleToggler(!toggler)}>
                <Icon.ZoomIn />
              </button>
            </li>
          )}
          {url ? (
            <li>
              <a rel="noopener noreferrer" target="_blank" href={`${window.location.origin.toString()}${url}`}>
                <Icon.Link />
              </a>
            </li>
          ) : null}
        </ul>
      </div>
      {!url ? (
        <h5>{title}</h5>
      ) : (
        <h5>
          <a rel="noopener noreferrer" target="_blank" href={url}>
            {title}
          </a>
        </h5>
      )}
      {subtitle ? <h6>{subtitle}</h6> : null}
      {!largeImageUrl ? null : <FsLightbox toggler={toggler} sources={largeImageUrl} />}
    </motion.div>
  )
}

export default Portfolio
