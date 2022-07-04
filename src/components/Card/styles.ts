import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  height: 250px;
  display: flex;
  margin: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: black solid 2px;
  border-radius: 10%;
  font-family: 'Roboto Slab', 'sans-serif', serif;
  word-wrap: break-word;
  line-height: 1rem;
`;

export const Title = styled.a`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: black;
  text-decoration: none;
  margin: 5px 5px 15px 5px;
  &:hover {
    color: red;
    text-decoration: underline;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  margin: 5px;
`;

export const Icon = styled.img`
  width: 14px;
  height: 14px;
`;