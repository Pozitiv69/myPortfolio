import React from 'react';
import styled from 'styled-components';
import GIF from '../assets/Home Video.mp4';

const VideoConteiner = styled.div`
  width: 100%;

  video {
    width: 100%;
    height: auto;
  }
`;

const CoverVideo = () => {
  return (
    <VideoConteiner>
      <video src={GIF} type="video/mp4" autoPlay muted loop />
    </VideoConteiner>
  );
};

export default CoverVideo;
