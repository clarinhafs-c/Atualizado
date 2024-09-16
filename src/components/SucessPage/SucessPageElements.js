import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  z-index: 1;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  margin: 20px 0;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: #fff;
`;

// Adicionando estilo para o vídeo
export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;
