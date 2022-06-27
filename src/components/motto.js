import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'
import { lighten } from 'polished'

import { Container, Section, SectionHeading } from './styled/global'

import vars from '../vars'

const MottoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  div + div {
    margin-top: 1.5rem;
  }

  @media (min-width: ${vars.breakpointLarge}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    div + div {
      margin-top: 0;
    }
  }
`

const MottoHeadingWrapper = styled.div`
  @media (min-width: ${vars.breakpointLarge}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const MottoHeading = styled(SectionHeading)`
  font-size: ${vars.fontSizeHeading3};
  margin-bottom: 1rem;
  margin-right: 1rem;

  @media (min-width: ${vars.breakpointLarge}) {
    font-size: ${vars.fontSizeHeading5};
    display: inline;
    max-width: ${({ $post }) => ($post ? '34.5rem' : '27rem')};
  }
`

const MottoContent = styled.div`
  p {
    color: ${({ bg }) =>
      bg !== 'colorWhite' ? vars.colorWhite : vars.colorAlmostBlack} !important;
  }
  a {
    color: ${lighten(0, vars.colorGreenSmall)};
    transition: color 250ms ${vars.ease};

    :hover,
    :focus {
      color: ${lighten(0.05, vars.colorGreenSmall)};
      transition: color 250ms ${vars.ease};
    }
  }

  @media (min-width: ${vars.breakpointLarge}) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${({ $post }) => ($post ? '1.5rem' : '1rem')};
    border-left: solid 0.125rem ${vars.colorGreen};
    padding-left: 2rem;
    font-size: ${vars.fontSizeTextLarge};
  }
`

const MottoDivider = styled.div`
  display: none;

  @media (min-width: ${vars.breakpointLarge}) {
    display: block;
    width: 0.125rem;
    height: 100%;
    background-color: ${vars.colorGreen};
  }
`

const Motto = ({
  mainHeadingText,
  paragraphContent,
  smallGreenHeadingText,
  sectionBackgroundColor,
  launchPost,
}) => {
  return (
    <Section bg={sectionBackgroundColor}>
      <Container>
        <MottoWrapper>
          <MottoHeadingWrapper>
            <MottoHeading
              $post={launchPost}
              color={
                sectionBackgroundColor !== 'colorWhite'
                  ? vars.colorWhite
                  : vars.colorAlmostBlack
              }
            >
              <span className="green-subtext">{smallGreenHeadingText}</span>
              {mainHeadingText}
            </MottoHeading>
          </MottoHeadingWrapper>
          <MottoDivider />
          <MottoContent $post={launchPost} bg={sectionBackgroundColor}>
            <div>{paragraphContent && parse(paragraphContent)}</div>
          </MottoContent>
        </MottoWrapper>
      </Container>
    </Section>
  )
}

export const fragment = graphql`
  fragment MottoSection on WpPage_Layoutsections_Components_MottoSection {
    fieldGroupName
    mainHeadingText
    paragraphContent
    smallGreenHeadingText
    sectionBackgroundColor
  }
`

export default Motto
