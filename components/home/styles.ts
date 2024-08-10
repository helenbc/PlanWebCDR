import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const InfoText = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;
