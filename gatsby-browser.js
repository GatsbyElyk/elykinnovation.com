// normalize CSS across browsers
import React from 'react'
import './src/normalize.css'
import './src/global.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import 'react-18-image-lightbox/style.css'
import BackToTop from './src/components/back-to-top'

export const wrapRootElement = ({ element }) => {
  return (
    <>
      {element}
      <BackToTop />
    </>
  )
}
