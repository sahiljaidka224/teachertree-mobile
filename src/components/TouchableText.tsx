import { StyleProp, ViewStyle } from "react-native";

import React from "react";
import styled from "styled-components/native";
import { theme } from "../theme/default";

type Props = {
  title: string;
  textColor?: string;
  onPress: () => void;
};

const Wrapper = styled.TouchableOpacity``;

const Title = styled.Text<{ color: string }>`
  color: ${({ color }) => color};
`;

export const TouchableText: React.FC<Props> = ({
  title,
  textColor = theme.colors.secondary,
  onPress,
}) => {
  return (
    <Wrapper activeOpacity={0.3} onPress={onPress}>
      <Title color={textColor}>{title}</Title>
    </Wrapper>
  );
};
