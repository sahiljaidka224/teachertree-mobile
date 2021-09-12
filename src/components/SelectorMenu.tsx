import { Ionicons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";
import { theme } from "../theme/default";

type Props = {
  onPress: () => void;
  iconName?: React.ComponentProps<typeof Ionicons>["name"];
  title: string;
  iconColor?: string;
};

const DescriptionText = styled.Text`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 16px;
`;

const SelectorView = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  margin-top: 4px;
  border-radius: 15px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  border: 2px solid ${(props) => props.theme.colors.border};
  padding: 0 12px;
`;

export const SelectorMenu: React.FC<Props> = ({
  onPress,
  iconName = "chevron-down",
  title,
  iconColor = theme.colors.primary,
}) => {
  return (
    <SelectorView activeOpacity={0.9} onPress={onPress}>
      <DescriptionText>{title}</DescriptionText>
      <Ionicons size={24} name={iconName} color={iconColor} />
    </SelectorView>
  );
};
