import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0.5rem 0;
  max-width: 500px;
  width: 100%;
`;

export const LabelWrapper = styled.span`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5rem;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 1rem;
  font-weight: 500;
  margin-left: 0.5rem;
`;

export const CustomInput = styled.input`
  border-radius: 1rem;
  font-size: 1rem;
  outline: none;
  width: 100%;
  border: none;
  padding: 10px;
`;
