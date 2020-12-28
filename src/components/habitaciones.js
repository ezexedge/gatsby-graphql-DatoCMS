import React from 'react';
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { css } from '@emotion/core';
import Layout from '../components/layout'

export const query = graphql`
query($slug: String!){
  
    allDatoCmsHabitacione(filter: {slug: {eq: $slug}}){
      nodes {
        titulo
        contenido
        imagen {
          fluid(maxWidth:1200){
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
    
  }

`

const HabitacionTemplate = ({data : {allDatoCmsHabitacione : { nodes }}}) => {

    console.log(nodes)
    const {titulo,contenido ,imagen} = nodes[0]


    return ( 
        <Layout>
            <main
                css={css`
                    margin: 0 auto;
                    max-width: 1000px;
                    width: 80%;
                `}
            >
                <h1
                    css={css`
                        text-align: center;
                        margin-top: 4rem;
                    `}
                >{titulo}</h1>
                <p>{contenido}</p>
                <Image 
                    fluid={imagen.fluid}
                />
            </main>
        </Layout>
     );
}
 
export default HabitacionTemplate;