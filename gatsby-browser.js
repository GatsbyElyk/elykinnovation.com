// normalize CSS across browsers
import React from 'react'
import styled from 'styled-components'
import './src/normalize.css'
import './src/global.scss'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import 'react-image-lightbox/style.css'
import ScrollToTop from 'react-scroll-up'
import Arrowscroll from './content/assets/elyk-back-to-top.png'

export const wrapRootElement = ({ element }) => {
  return (
    <>
      {element}
      <ScrollToTop showUnder={160}>
        <ArrowWrapper>
          <img src={Arrowscroll} alt="Back to top arrow" />
        </ArrowWrapper>
      </ScrollToTop>
    </>
  )
}


const ArrowWrapper = styled.div`
  max-height: 4rem;
  max-width: 4rem;
  transition: all 0.125s ease-in-out;



  
    :hover,
    :focus {
      transform: scale(0.9);
    }
  
`
