import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import arrowSrc from '../../content/assets/elyk-back-to-top.png'

const BackToTop = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    // the window object is not available during Server-Side Rendering
    // (i.e. if you refresh the browser)
    if (window === undefined) return

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  // This function will scroll the window to the top
  const scrollToTop = () => {
    if (window === undefined) return

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {showButton && (
        <ToTopButton onClick={scrollToTop} className='back-to-top'>
          <img src={arrowSrc} alt='Back to top' />
        </ToTopButton>
      )}
    </>
  )
}

const ToTopButton = styled.button`
  background-color: transparent;
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: white;
  cursor: pointer;
  border: none;
  z-index: 999;
  &:hover {
    transform: scale(0.9);
  }
`

export default BackToTop
