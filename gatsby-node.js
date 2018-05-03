
const path = require('path')

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    const GalleryTemplate = path.resolve('src/templates/gallery.js')
    resolve(
      graphql(`
        {
          allContentfulGallery {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulGallery.edges.forEach((edge) => {
          createPage ({
            path: edge.node.slug,
            component: GalleryTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })
}