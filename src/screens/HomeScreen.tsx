import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.primary};
`;

export const HomeScreen = () => {
  return <Wrapper />;
};
