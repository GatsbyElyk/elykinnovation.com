import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Container, Section, SectionHeading } from './styled/global'
import PortfolioCard from './portfolio-card'
import Button from './button'

import vars from '../vars'

const PortfolioGrid = styled.div`
  display: grid;
  gap: 1.5em;
  margin-bottom: 2rem;
  margin-bottom: ${props => (props.$button ? '2rem' : 0)};

  @media (min-width: ${vars.breakpointMedium}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`

const PortfolioPreview = ({
  sectionBackgroundColor,
  backgroundGraphic,
  angledBackgroundTransition,
  smallGreenHeadingText,
  mainHeadingText,
  clients,
  buttonText,
  buttonLink,
}) => {
  return (
    <Section
      bg={sectionBackgroundColor}
      angled={angledBackgroundTransition}
      graphic={backgroundGraphic}
    >
      <Container>
        <SectionHeading bg={sectionBackgroundColor}>
          <span>{smallGreenHeadingText}</span>
          {mainHeadingText}
        </SectionHeading>
        <PortfolioGrid $button={buttonLink && buttonText}>
          {clients.map((client, clientIndex) => (
            <PortfolioCard
              key={`${client.clienbtName}_card_${clientIndex}`}
              {...client}
            />
          ))}
        </PortfolioGrid>
        <Button buttonStyle="red" elementType="link" href={buttonLink}>
          {buttonText}
        </Button>
      </Container>
    </Section>
  )
}

export const fragment = graphql`
  fragment PortfolioPreview on WpPage_Layoutsections_Components_PortfolioPreview {
    angledBackgroundTransition
    backgroundGraphic
    fieldGroupName
    sectionBackgroundColor
    mainHeadingText
    smallGreenHeadingText
    buttonText
    buttonLink
    clients {
      clientLink
      clientName
      fieldGroupName
      clientImage {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`

export default PortfolioPreview