import React from 'react'
import Header from './header'
import Footer from './footer'
import Seo from './seo'
import { MainContent } from './styled/global'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css' //this will show/hide the link on focus
const Layout = ({
  seoData,
  isHomePage,
  children,
  currentPageSlug,
  isPrimaryPage,
}) => {
  return (
    <>
      <Seo
        title={seoData?.title}
        description={seoData?.metaDesc}
        facebookDescription={seoData?.facebookDescription}
        facebookTitle={seoData?.facebookTitle}
        twitterDescription={seoData?.twitterDescription}
        twitterTitle={seoData?.twitterTitle}
      />
      <SkipNavLink>Skip Nav</SkipNavLink>
      <div
        className={`body-wrapper ${currentPageSlug} ${
          isPrimaryPage ? 'primary' : 'secondary'
        }`}
      >
        <Header currentPageSlug={currentPageSlug} />
        <SkipNavContent />
        <MainContent home={isHomePage}>{children}</MainContent>
        <Footer />
      </div>
    </>
  )
}
export default Layout
