import React from "react";
import styled from "styled-components/native";

interface Props {
  title: string;
}

const Background = styled.View`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  background: red;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <Background>
      <Text>{title}</Text>
    </Background>
  );
};
