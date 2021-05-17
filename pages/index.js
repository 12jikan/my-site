// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import TypewriterComponent from '../components/TypewriterComponent';
import React, { useEffect } from 'react';
// import Particles from 'react-particles-js';
// import Particle_Config from '../assets/particles';
import GithubHomeComponent from '../components/GithubHomeComponent';
import axios from 'axios';

export const getStaticProps = async () => {
  const res = await axios.get('https://api.github.com/users/12jikan/repos');
  const data = await res.data

  return {
    props: {
      gitProfile: data
    }
  }
};

export default function Home(props) {
  const titles = [
    'Software Engineer',
    'Content Creator',
    'Tech Enthusiast'
  ];

  let github_data = props.gitProfile;

  const darkColor = '#363636';
  const lightColor = '#e0e0e0';

  {/* <TypewriterComponent text={titles} /> */ }

  {/* <div className="container">
        <Particles 
          params={Particle_Config} 
          // height="500px" 
          // width="500px" 
          style={canvas_style}
        />
      </div> */}

  return (
    <>
      <section className="hero is-halfheight hero-header hero-bg">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title has-text-weight-light is-size-1 name-title">
              JAREEM E HOFF
            </p>
            <TypewriterComponent text={titles} color={'#e0e0e0'} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <div className="columns is-multiline">
                <div className="column section-title">
                  <h1 className="">About</h1>
                </div>

                <div className="column is-12">
                  <p className="is-size-5">Jareem Hoff is a web and software engineer based out of New York City, New York. He is currently working as a contract developer at ABC News. In his spare time he tries to further build up his skills as a software engineer, by planning out future applications that come to mind or working on personal projects, all while reading up on new technologies and systems. Even though he spends most of his time as a web developer, he does work in other languages such as Java, Python, C++ and Golang, to try and understand programming from a deeper level.</p>
                </div>
              </div>
            </div>

            <div className="column is-6">
              <div className="columns is-multiline">
                <div className="column section-title">
                  <h1 className="">Projects</h1>
                </div>

                <div className="column is-12">
                  <GithubHomeComponent  git={ github_data }/> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      <style jsx>{`
        .hero-bg {
          background-color: ${darkColor};
        };

        .name-title {
          font-family: Lombok;
          color: ${lightColor};
        };

        .section-title {
          // text-transform: uppercase;
          color: ${darkColor};
          font-size: 30px;
        };
        
      `}
      </style>
    </>
  )
}
