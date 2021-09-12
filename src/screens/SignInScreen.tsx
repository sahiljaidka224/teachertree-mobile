import { Seperator, SeperatorText } from "./SignUpScreen";

import { Button } from "../components/Button";
import { ButtonMode } from "../common/enums";
import React from "react";
import { RootStackParamList } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { TextInput } from "../components/TextInput";
import { TouchableText } from "../components/TouchableText";
import styled from "styled-components/native";
import { theme } from "../theme/default";
import { useStateApi } from "../state/Context";

type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Root"
>;

type Props = {
  navigation: SignInScreenNavigationProp;
};

type State = {
  email: string;
  password: string;
};

const Wrapper = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  padding: 45px;
`;

const ButtonWrapper = styled.View`
  margin-top: 13px;
`;

const InputWrapper = styled.View`
  margin-bottom: 22px;
`;

const ForgotPasswordWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 6px 0 20px 0;
`;

const SignUpWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0 auto;
  padding-top: 12px;
`;

const AccountText = styled.Text``;

export const SignInScreen: React.FC<Props> = ({ navigation }) => {
  const { state } = useStateApi();
  const [signUpValues, updateSignUpState] = React.useState<State>({
    email: "",
    password: "",
  });

  const onTextChange = (text: string, id: string) => {
    let updatedValue = {
      [id]: text,
    };

    updateSignUpState({
      ...signUpValues,
      ...updatedValue,
    });
  };

  const onSigUpPress = () => {
    navigation.navigate("SignUp");
  };

  const onSignInPress = () => {
    navigation.navigate("Home");
  };

  const { email, password } = signUpValues;
  return (
    <Wrapper>
      <InputWrapper>
        <TextInput
          id="email"
          value={email}
          placeholder="Johndoe@gmail.com"
          label="Email"
          onChange={onTextChange}
        />
      </InputWrapper>
      <TextInput
        id="password"
        value={password}
        label="Password"
        secureText={true}
        onChange={onTextChange}
      />
      <ForgotPasswordWrapper>
        <TouchableText title="Forgot Password?" onPress={() => {}} />
      </ForgotPasswordWrapper>

      <Button
        text="Sign In"
        onPress={onSignInPress}
        mode={ButtonMode.Contained}
        textColor={theme.colors.textSecondary}
        bgColor={theme.colors.secondary}
      />
      <SignUpWrapper>
        <AccountText>Don't have an account?</AccountText>
        <TouchableText title=" Sign Up here" onPress={onSigUpPress} />
      </SignUpWrapper>
      <Seperator>
        <SeperatorText>Or</SeperatorText>
      </Seperator>
      <Button
        icon="google"
        text="Sign In with Google"
        onPress={() => {}}
        bgColor={theme.colors.primaryLight}
        textColor={theme.colors.textDark}
      />
      {state.biometricType && (
        <ButtonWrapper>
          <Button
            text={`Sign In with ${state.biometricType?.replace("_", " ")}`}
            onPress={() => {}}
            bgColor={theme.colors.primaryLight}
            textColor={theme.colors.textDark}
          />
        </ButtonWrapper>
      )}
    </Wrapper>
  );
};
