import { TextStyle, ViewStyle } from "react-native";

import { ButtonMode } from "../common/enums";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { Button as PaperButton } from "react-native-paper";
import React from "react";
import { theme } from "../theme/default";

type Props = {
  icon?: IconSource;
  mode?: ButtonMode;
  onPress: () => void;
  textColor?: string;
  text?: string;
  disabled?: boolean;
  border?: boolean;
  height?: number;
  bgColor?: string;
  borderRadius?: number;
  labelStyle?: TextStyle;
  buttonStyle?: ViewStyle;
};

export const Button: React.FC<Props> = ({
  icon,
  mode = ButtonMode.Outlined,
  onPress,
  textColor = theme.colors.secondary,
  text = "Sign Up with Google",
  disabled = false,
  border,
  height = 45,
  borderRadius = 50,
  bgColor = theme.colors.button.background,
  labelStyle,
  buttonStyle,
}) => {
  return (
    <PaperButton
      icon={icon}
      mode={mode}
      onPress={onPress}
      color={mode === ButtonMode.Text ? textColor : "white"}
      uppercase={false}
      disabled={disabled}
      contentStyle={{
        height: 45,
      }}
      labelStyle={{
        color: textColor,
        ...labelStyle,
      }}
      style={{
        borderRadius: borderRadius ? borderRadius : 0,
        backgroundColor: bgColor,
        height: height,
        justifyContent: "center",
        borderColor: border ? theme.colors.secondary : "",
        borderWidth: border ? 1 : 0,
        ...buttonStyle,
      }}
    >
      {text}
    </PaperButton>
  );
};
