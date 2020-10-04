import React from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from 'mdbreact';
import Person from './person';
import Story from './story';
import PersonBlock from './personBlock';

import './story.css';

const About = () => {
  const names = {
    'Yi Chen Zhu':
      'Yi Chen is a 3rd year Software Engineering student at the University of Toronto. His main role was to code Cedric’s designs and make them come to life on the internet. This is his first time creating a site this big from scratch and it took some balls to do so! Yi Chen specializes in back-end development where he programs the magic that happens whenever a button is clicked or an account is created.',
    'Cedric Mosdell':
      'Cedric is a 3rd year Civil Engineering student at McMaster and loves eating hamburgers. He experienced the hassles of finding his textbooks when he was in first year, so he provided the necessary insight for making MUSBE an online tool tailored to students. Cedric has a background of doing art which had led him to becoming a part-time graphics designer and creating what MUSBE looks like right now. MUSBE was also his first site he has ever designed in his life! Woot!',
    // 'Charles Petchsy': 'Me too',
    'Harrison Fok': 'Harrison is a tennis pro.',
    // 'Allan C': 'Me too',
    // 'Avi Patel': 'Me too',
    // 'Bo Dan': 'Me too',
    // 'David Tan': 'Me too',
    // 'Hassan Azmi': 'Me too',
    // 'Alex': 'Me too',
    // 'Shuyi': 'Me too',
  };
  const imagePaths = ['./yi_chen.jpg', './cedric.jpg', './harrison.jpg'];

  const blocks = Object.keys(names).map(function (key, i) {
    // console.log(imagePaths[i]);
    return (
      <MDBCol sm={3}>
        <div key={i}>
          <strong>
            <p>{key}</p>
          </strong>
          <img src={require(`${imagePaths[i]}`)} width="200" height="200" />
          <p style={{ width: '200px' }}>{names[key]}</p>
        </div>
      </MDBCol>
    );
  });
  return (
    <div>
      <h1 className="centeredPlusSpace">About TMB</h1>
      <div className="gray">
        <div style={{ marginLeft: '350px' }}>
          <MDBContainer>
            <MDBRow>{blocks}</MDBRow>
          </MDBContainer>
        </div>
        <Story />
      </div>
    </div>
  );
};

export default About;
