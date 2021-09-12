import { ScrollView, Text } from "react-native";

import { Button } from "../components/Button";
import React from "react";
import { RootStackParamList } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { TextInput } from "../components/TextInput";
import { TouchableText } from "../components";
import styled from "styled-components/native";
import { theme } from "../theme/default";
import { useStateApi } from "../state/Context";

type State = {
  email: string;
  password: string;
};

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SignUp"
>;

type Props = {
  navigation: SignUpScreenNavigationProp;
};

const Wrapper = styled(ScrollView)`
  background: ${(props) => props.theme.colors.background};
  display: flex;
  flex: 1;
  padding: 45px;
`;

export const Seperator = styled.View`
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
`;

export const SeperatorText = styled.Text`
  color: white;
  font-size: 16px;
  line-height: 16.59px;
  font-weight: 400;
`;

const InputWrapper = styled.View`
  margin-bottom: 22px;
`;

const NextButtonWrapper = styled.View`
  padding-top: 10px;
  margin-bottom: 22px;
`;

const SignUpWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0 auto;
  padding-top: 12px;
`;

export const ImageWrapper = styled.View`
  width: 100%;
  height: 220px;
  background-color: grey;
  margin-bottom: 20px;
`;

const ToggleWrapper = styled.View`
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
`;

const FaceIdText = styled.Text`
  font-size: 16px;
`;

const Switch = styled.Switch``;

type IdType = "email" | "password";

const inputs = [
  {
    id: "email",
    placeholder: "Johndoe@gmail.com",
    label: "Email",
  },
  {
    id: "password",
    label: "Password",
    secureText: true,
  },
];

export const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const { state } = useStateApi();
  const [signUpValues, updateSignUpState] = React.useState<State>({
    email: "",
    password: "",
  });

  //https://blog.logrocket.com/how-to-implement-faceid-and-touchid-in-react-native-and-expo/
  const [idEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const onTextChange = (text: string, id: string) => {
    let updatedValue = {
      [id]: text,
    };

    updateSignUpState({
      ...signUpValues,
      ...updatedValue,
    });
  };

  const onNext = () => {
    navigation.navigate("Otp");
  };

  const onLogIn = () => {
    navigation.goBack();
  };

  return (
    <Wrapper contentContainerStyle={{ paddingBottom: 50 }}>
      {inputs.map((inp, index) => {
        return (
          <InputWrapper key={index}>
            <TextInput
              id={inp.id}
              key={inp.id}
              onChange={onTextChange}
              value={
                signUpValues[inp.id as IdType].length > 0
                  ? signUpValues[inp.id as IdType]
                  : ""
              }
              placeholder={inp.placeholder ?? undefined}
              label={inp.label}
              secureText={inp.secureText ?? false}
            />
          </InputWrapper>
        );
      })}
      {state.biometricType && (
        <ToggleWrapper>
          <FaceIdText>{`Enable ${state.biometricType?.replace(
            "_",
            " "
          )}`}</FaceIdText>
          <Switch
            trackColor={{ false: "#bdbdbd", true: "#15a382" }}
            ios_backgroundColor="#bdbdbd"
            onValueChange={toggleSwitch}
            value={idEnabled}
          />
        </ToggleWrapper>
      )}
      <NextButtonWrapper>
        <Button
          text="Create Account"
          onPress={onNext}
          border
          textColor={theme.colors.textSecondary}
          bgColor={theme.colors.primary}
        />
      </NextButtonWrapper>
      <Button
        icon="google"
        text="Sign Up with Google"
        onPress={() => {}}
        textColor={theme.colors.textDark}
        bgColor={theme.colors.primaryLight}
      />
      <SignUpWrapper>
        <Text>Already have an account? </Text>
        <TouchableText title=" Log in" onPress={onLogIn} />
      </SignUpWrapper>
    </Wrapper>
  );
};
