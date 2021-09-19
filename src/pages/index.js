import * as React from "react"
import styled , { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
background-color: #000;

}
* {
  font-family: 'Montserrat', sans-serif;
}
`;

const Main = styled.main`
color: #fff;

`;

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;

  font-size: 2em;
  font-weight: 500;
  &.links {
    font-size: 3rem;
    font-weight: 600;
  }
  &.links > span > a {
    text-decoration: none;
    color: inherit;
  }
  &.links > span > a:hover {
    color: #ffffffbd;
  }
  &.hello {
    font-size: 5rem;
    font-weight: 700;
  justify-content: center;

  }
  @media screen and (min-width: 880px) {
    & {
      font-size: 4em;
    }
    &.links{
      font-size: 10rem;
    }
    &.hello {
      font-size: 13rem;
    }
  }
  
`;
const IndexPage = () => {
  return (
    <>
    <GlobalStyle />
    <Main>
      <Page className="hello">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.025
              },        
            }
          }}>
        <motion.span
          style={{
            display: "inline-block",
          }}
          variants={{
            hidden: {
              y: "200%",
              transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
            },
            visible: {
              y: 0,
              transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
            }
          }}
        >
        Hi-ya!
        </motion.span>
        </motion.div>
      </Page>
      <Page>
      <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.025
              },        
            }
          }}>
                    <motion.span
          style={{
            display: "inline-block",
          }}
          variants={{
            hidden: {
              y: "200%",
              transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
            },
            visible: {
              y: 0,
              transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
            }
          }}
        >

        I'm Abdellatif Douz,<br/>
        </motion.span>
        <motion.span
          style={{
            display: "inline-block",
          }}
          variants={{
            hidden: {
              y: "200%",
              transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
            },
            visible: {
              y: 0,
              transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
            }
          }}
        >

        Moroccan front end developer,<br />
        </motion.span>
        <motion.span
          style={{
            display: "inline-block",
          }}
          variants={{
            hidden: {
              y: "200%",
              transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
            },
            visible: {
              y: 0,
              transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
            }
          }}
        >

        currently working at O'Talent.<br />       
        </motion.span>
        </motion.div> 
      </Page>
      <Page className="links">
        <span>
        <a href="" target="_blank">GITHUB</a>/
        <br />
        <a href="" target="_blank">TWITTER</a>/
        <br/>
        <a href="" target="_blank">INSTAGRAM</a>
        </span>
      </Page>

    </Main>
    </>
  )
}

export default IndexPage
