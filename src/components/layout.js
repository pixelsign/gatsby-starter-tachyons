import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import './tachyons/css/tachyons.css'
import './custom.css'

export default ({ children }) => (
  <StaticQuery
  query={graphql`
  query LayoutQuery {
           site {
             siteMetadata {
               title
             }
           }
         }
       `}
       render={data => (
         <>
           <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`} defaultTitle={data.site.siteMetadata.title} />
           <div>
             {children}
           </div>
         </>
       )}
     />
   )