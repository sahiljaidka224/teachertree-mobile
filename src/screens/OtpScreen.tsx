import { Button } from "../components";
import { ButtonMode } from "../common/enums";
import { ImageWrapper } from "./SignUpScreen";
import { Platform } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { theme } from "../theme/default";

const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  padding: 45px;
`;

const VerificationWrapper = styled.View`
  display: flex;
  margin-top: 16px;
`;

const VerificationText = styled.Text`
  font-weight: 400;
  font-size: 15px;
  margin: 0 auto;
  font-weight: bold;
`;

const Description = styled.Text`
  margin-top: 20px;
`;

const OtpWrapper = styled.View`
  width: 100%;
  height: 60px;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 25px 0 35px;
`;

const InputWrapper = styled.View`
  height: 45px;
  width: 30px;
  background-color: ${(props) => props.theme.colors.primary};
  margin-right: 10px;
  border-radius: 4px;
`;

const OtpTextInput = styled.TextInput`
  height: 100%;
  width: 100%;
  font-size: 16px;
  padding-left: 35%;
  color: ${(props) => props.theme.colors.textSecondary};
`;

export const OtpScreen = () => {
  const [otp, updateOtp] = React.useState<string[]>([]);
  const [editingIndex, updateEditingIndex] = React.useState<Number>(0);

  return (
    <Wrapper>
      <VerificationWrapper>
        <VerificationText>Verification Code</VerificationText>
        <Description>
          Enter the stogo code provided by your employer below
        </Description>

        <OtpWrapper>
          {[0, 1, 2, 3].map((_elem, index) => (
            <InputWrapper key={`${index}-${Math.random()}`}>
              <OtpTextInput
                textContentType="none"
                key={`${index}-${Math.random()}`}
                maxLength={1}
                value={otp[index] ? otp[index] : ""}
                autoFocus={editingIndex === index}
                keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
                onChange={(event) => {
                  const { text } = event.nativeEvent;
                  otp[index] = text;
                  updateOtp([...otp]);
                  if (index < 3 && text !== "") {
                    if (index < 3) {
                      updateEditingIndex(index + 1);
                    }
                  }
                }}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === "Backspace") {
                    if (index > 0 && otp[index] === "") {
                      updateEditingIndex(index - 1);
                    }
                  }
                }}
              />
            </InputWrapper>
          ))}
        </OtpWrapper>
        <Button
          text="Complete Sign Up"
          onPress={() => {}}
          mode={ButtonMode.Contained}
          textColor={theme.colors.textSecondary}
          bgColor={theme.colors.secondary}
        />
      </VerificationWrapper>
    </Wrapper>
  );
};
