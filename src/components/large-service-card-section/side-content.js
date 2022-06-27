import React, { useRef } from 'react'
import parse from 'html-react-parser'
import Image from 'gatsby-image'
import styled from 'styled-components'

import vars from '../../vars'

const SideImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  picture img {
    object-fit: contain !important;
  }
`

const SideTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const SideText = styled.div`
  width: 100%;
  z-index: 1;
  h2,
  h3,
  h4,
  h5 {
    font-size: ${vars.fontSizeHeading2};
  }

  ul {
    padding: 0;
    list-style: none;
    li {
      background-image: none !important;
      padding: 0.5em 0.75em;
      margin: 0.5em 0;
      border: solid ${vars.pixel};
      border-color: ${vars.colorGreen};
      border-radius: 999rem;
      text-align: center;
    }
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    width: 90%;
    background-color: ${({ position }) =>
      position === 'left' ? vars.colorBlack : 'transparent'};
    border: solid ${vars.pixel};
    border-color: ${({ position }) =>
      position === 'left' ? vars.colorGreen : 'transparent'};
    border-radius: ${vars.borderRadiusLarge};
    padding: ${({ position, padding }) => (position === 'left' ? '4em 2em' : padding)};

    h2,
    h3,
    h4,
    h5 {
      text-align: center;
      font-size: ${vars.fontSizeHeading3};
    }

    ul {
      display: inline-flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding-left: 1em;
      li {
        background-image: none !important;
        padding: 0.5em 0.75em;
        margin: 0.25em;
        border-color: ${({ position }) =>
          position === 'left' ? vars.colorGreen : vars.colorWhite};
        border-radius: ${vars.borderRadiusLarge};
        font-size: ${vars.fontSizeTextSmall};
        font-weight: ${vars.fontWeightBold};
        text-align: center;
      }
    }
  }
`

const SideTextBg = styled.div`
  display: none;
  position: absolute;

  &.circle {
    height: 35.625rem;
    width: 35.625rem;
    background-color: ${vars.colorGreen};
    z-index: 0;
    border-radius: 999rem;
  }

  &.square {
    width: ${({ $width }) => $width}px;
    height: ${({ $height }) => $height}px;
    border: solid ${vars.pixel} ${vars.colorGreen};
    border-radius: ${vars.borderRadiusLarge};
    left: 50%;
    top: 50%;
    transform: translate(-55%, -55%);
    z-index: 2;
  }

  @media (min-width: ${vars.breakpointExtraLarge}) {
    display: block;
  }
`

const SideContent = ({
  sideContentType,
  sideText,
  sideImage: { desktop, mobile, altText },
  cardPosition,
  extraPadding,
}) => {
  const textRef = useRef()

  if (!textRef.current) return null

  const textRect = textRef.current.getBoundingClientRect()

  return sideContentType === 'image' ? (
    <SideImage>
      <Image
        backgroundColor='transparent'
        fixed={[mobile, { ...desktop, media: `(min-width: ${vars.breakpointLarge})` }]}
        alt={altText}
      />
    </SideImage>
  ) : (
    <SideTextWrapper position={cardPosition}>
      <SideText ref={textRef} position={cardPosition} padding={extraPadding}>
        {sideText && parse(sideText)}
      </SideText>
      <SideTextBg
        $width={textRect.width}
        $height={textRect.height}
        className={cardPosition === 'left' ? 'square' : 'circle'}
        aria-hidden
      />
    </SideTextWrapper>
  )
}

export default SideContent
