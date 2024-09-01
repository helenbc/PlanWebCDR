import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  background-image: url('banner.png');
  background-size: cover;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30vh;
`;

export const GlassBackground = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 500px;
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Image)`
`;
