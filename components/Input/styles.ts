import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0.5rem 0;
  max-width: 400px;
  width: 100%;
`;

export const Label = styled.span`
  font-size: 1rem;
  margin-bottom: 0.2rem;
  font-weight: 500;
`;

export const CustomInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  font-size: 1rem;
  outline: none;
  width: 100%;
`;
