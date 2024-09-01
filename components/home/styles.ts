import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: #f3f3f3;
`;

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

export const LogoContainer = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const InfoText = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  background-color: #fff;
  padding: 1rem;
  border-radius: 1rem;
  max-width: 500px;
  text-align: justify;
`;
