import { Ionicons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";
import { theme } from "../theme/default";

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  background: white;
  min-height: 60px;
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 14px;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

const InformationContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

const SubjectsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 4px;
`;

const Description = styled.Text<{
  bold?: boolean;
  size?: string;
  color?: string;
  marginBottom?: string;
  marginLeft?: string;
}>`
  font-size: ${(props) => (props.size ? props.size : "18px")};
  font-weight: ${(props) => (props.bold ? "bold" : 400)};
  color: ${(props) => (props.color ? props.color : "#000")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "4px"};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0")};
`;

export const TeacherView = () => {
  return (
    <Wrapper>
      <InformationContainer>
        <Description
          bold
          size="20px"
          marginBottom="10px"
          color={theme.colors.primary}
        >
          Name of teacher
        </Description>
        <SubjectsWrapper>
          <Ionicons size={18} name="book" color={theme.colors.primary} />
          <Description marginLeft="5px">English</Description>
        </SubjectsWrapper>
        <SubjectsWrapper>
          <Ionicons
            size={18}
            name="phone-portrait"
            color={theme.colors.primary}
          />
          <Description marginLeft="5px">047575757</Description>
        </SubjectsWrapper>
      </InformationContainer>
    </Wrapper>
  );
};
