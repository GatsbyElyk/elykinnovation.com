import React, { useRef } from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'

import vars from '../vars'

const ImageWrapper = styled.div`
  position: relative;

  .gatsby-image-wrapper {
    border-radius: ${({ $rounded }) => ($rounded ? vars.borderRadiusLarge : 0)};
  }
`

const ImageBg = styled.div`
  display: none;
  position: absolute;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  border: solid ${vars.pixel} ${vars.colorGreen};
  border-radius: ${vars.borderRadiusLarge};
  top: 0;
  left: 0;
  transform: translate(6%, 6%);
  z-index: -1;

  @media (min-width: ${vars.breakpointLarge}) {
    display: block;
  }
`

const ImageWithStroke = ({
  fixed,
  fluid,
  altText,
  backgroundColor,
  rounded,
  imageBorderEffect,
}) => {
  const imageRef = useRef()

  if (!imageRef.current) return null

  const imageRect = imageRef.current.getBoundingClientRect()

  return (
    <ImageWrapper $rounded={rounded} ref={imageRef}>
      {fixed ? (
        <Image
          backgroundColor={imageBorderEffect ? backgroundColor : 'transparent'}
          fixed={fixed}
          alt={altText}
        />
      ) : (
        <Image
          backgroundColor={imageBorderEffect ? backgroundColor : 'transparent'}
          fluid={fluid}
          alt={altText}
        />
      )}
      {imageBorderEffect && (
        <ImageBg $width={imageRect.width} $height={imageRect.height} aria-hidden />
      )}
    </ImageWrapper>
  )
}

export default ImageWithStroke
