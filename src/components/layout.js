import React from 'react';
import Header from './header'
import { Global, css } from '@emotion/react'
import Helmet from 'react-helmet'
import Footer from './footer'
import useSeo from '../components/hooks/use-seo'

const Layout = (props) => {

   const seo = useSeo()

   const {siteName, fallbackSeo : {description,title}} = seo
   console.log(seo)

    return ( 
        <>
        <Global
        styles={css`
                html {
                    font-size: 62.5%;
                    box-sizing: border-box;
                }
                
        *, *:before, *:after {
            box-sizing: inherit;
            }
                body {
                    font-size: 16px;
                    font-size: 1.6rem;
                    line-height: 1.5;
                }
                h1,h2,h3 {
                    margin: 0;
                    line-height: 1.5;


                }
                h1,h2 {
                    font-family: 'Robot', serif;

                }
                h3 {
                    font-family: 'PT Sans' , sans-serif;
                }
                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
        `}
        />
        <Helmet>
            <title>{title}</title>

            <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto:400,700&display=swap" rel="stylesheet" />

        </Helmet>

        <Header/>
        {props.children}
        <Footer/>
        </>
     );
}
 
export default Layout;