import { TextInput as Input } from "react-native-paper";
import React from "react";
import { theme } from "../theme/default";

enum Mode {
  Flat = "flat",
  Outlined = "outlined",
}

type Props = {
  placeholder?: string;
  value: string;
  onChange: (text: string, id: string) => void;
  mode?: Mode;
  rightComponent?: React.ReactNode;
  label?: string;
  secureText?: boolean;
  id: string;
  autoFocus?: boolean;
};

export const TextInput: React.FC<Props> = ({
  placeholder,
  label = "First Name",
  value,
  onChange,
  mode = Mode.Outlined,
  rightComponent,
  secureText = false,
  id,
  autoFocus = false,
}) => {
  const onTextChange = (text: string) => {
    onChange(text, id);
  };
  return (
    <Input
      mode={mode}
      label={label}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.textInput.placeholder}
      right={rightComponent}
      onChangeText={onTextChange}
      value={value}
      outlineColor={theme.colors.textInput.outlinedColor}
      selectionColor={theme.colors.textInput.outlinedColor}
      secureTextEntry={secureText}
      multiline={false}
      autoCorrect={false}
      autoFocus={autoFocus}
      style={{
        height: 40,
        backgroundColor: theme.colors.textInput.background,
        borderColor: "red",
      }}
    />
  );
};
