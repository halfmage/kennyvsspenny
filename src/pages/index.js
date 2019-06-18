import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(query)
  return (
    <>
    <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
        <a href="https://www.youtube.com/watch?v=gyUFfnbfWT8">VideoLink</a>

        <br />
        <br />
        <br />

        {data.allEpisode.edges.map(episode => (
          <div>
            <h2>{episode.node.frontmatter.title}</h2>
            <div>
              <span>Airtime: {episode.node.frontmatter.airtime} - </span>
              <span>Season: {episode.node.frontmatter.season} - </span>
              <span>Episode: {episode.node.frontmatter.episode}</span>
            </div>
            <div>{episode.node.frontmatter.description}</div>
            <div>Winner: {episode.node.frontmatter.winner}</div>
            <div>Humiliation: {episode.node.frontmatter.humiliation}</div>
            <a href={episode.node.frontmatter.youtubeID} target="_blank">Link</a>
          </div>
        ))}  
      </Layout>
    </>
  )
}

export default IndexPage

const query = graphql`
  query {
    allEpisode: allMarkdownRemark(filter: {frontmatter: {season: {eq: "01"}}}) {
      edges {
        node {
          frontmatter {
            season
            episode
            title
            description
            winner
            humiliation
            airtime
            youtubeID
          }
        }
      }
    }
  }
`
