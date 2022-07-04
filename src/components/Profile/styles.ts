import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 400px;
  border-radius: 10%;
  border: black solid 2px;
  margin: 25px 0;
  padding: 10px;
  @media(max-width: 600px) {
    min-width: 250px;
    flex-direction: column;
    align-items: center;
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  min-width: 120px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  @media(max-width: 600px) {
    min-width: 0;
    margin-bottom: 0;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 20px;
  min-width: 50%;
  @media(max-width: 600px) {
    margin-top: 0;
  }
`;

export const Title = styled.h1`
  font-family: 'Roboto Slab', 'sans-serif', serif;
  font-size: 18px;
  font-weight: bold;
  margin: 2px;
`;

export const Text = styled.p`
  font-family: 'Roboto Slab', 'sans-serif', serif;
  font-size: 15px;
  margin: 2px;
`;

export const Link = styled.a`
  font-family: 'Roboto Slab', 'sans-serif', serif;
  font-style: italic;
  color: black;
  font-size: 15px;
  text-decoration: none;
  &:hover {
    color: red;
    text-decoration: underline;
  }
`;

export const Photo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: black 1px solid;
  margin: 2px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;