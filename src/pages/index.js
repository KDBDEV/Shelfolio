import React from 'react'
import Img from 'gatsby-image'

const IndexPage = ({data}) => {
  const photo = data.allContentfulBannerPic.edges;
  return (
  <div>
  <h1>Shelby Herndon</h1>
  <img src="photo.banner"/>
  <p>Fashion Designer/Illustrator:</p>
  </div>
)
}

export default IndexPage

export const query = graphql `
  query PhotoQuery {
      allContentfulBannerPic{
        edges{
          node{
            id
        }
      }
      }
  }
`