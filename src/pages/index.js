import React from 'react'
import Img from 'gatsby-image'
import get from 'lodash/get'
import Banner from '../components/Banner'
import Helmet from 'react-helmet'

const IndexPage = ({ data }) => {
  const page = data.allContentfulBannerPic.edges;
  return (
    <div>
    <Helmet>
    <title>Shelby Herndon: Fashion Designer / Illustrator</title>
    <meta name="description" content="Shelby Herndon is a Fashion Designer and Illustrator from Baltimore MD" />
    </Helmet>
    <div>
      <img src = {page[0].node.banner.file.url}/>
    </div>
    </div>

  )
}

export default IndexPage
  
const siteTitle = get(this, 'props.data.site.siteMetadata.title')

export const pageQuery = graphql`
  query BannerQuery {
      allContentfulBannerPic {
        edges {
          node {
            banner {
              file {
                url
              }
              }
            }
          }
        }
      }
`