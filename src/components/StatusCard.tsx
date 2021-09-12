import { Button } from "./Button";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";
import { theme } from "../theme/default";

type StatusType = {
  subject: string;
  date: string;
  time: string;
  status: string;
  numOfOffers: string;
};

interface StatusCard {
  status: StatusType;
}

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  background: white;
  min-height: 60px;
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 14px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`;

const InformationContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

const DateTimeWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

const StatusAndOfferWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 14px;
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

const ButtonsWrapper = styled.View``;

const ButtonContainer = styled.View`
  margin-top: 15px;
`;

export const StatusCard: React.FC<StatusCard> = ({ status }) => {
  return (
    <Wrapper>
      <InformationContainer>
        <Description bold size="20px" marginBottom="10px">
          English Teacher
        </Description>
        <DateTimeWrapper>
          <Ionicons size={18} name="calendar" color="royalblue" />
          <Description marginLeft="5px">Wednesday, 9 May 2021</Description>
        </DateTimeWrapper>
        <DateTimeWrapper>
          <Ionicons size={18} name="time" color="royalblue" />
          <Description marginLeft="5px">09:00 - 12:00</Description>
        </DateTimeWrapper>
        <StatusAndOfferWrapper>
          <Description marginLeft="10px" color="green" size="16px">
            IN PROGRESS
          </Description>
          <Description marginLeft="16px" size="16px">
            {" "}
            21 offers
          </Description>
        </StatusAndOfferWrapper>
      </InformationContainer>
      <ButtonsWrapper>
        <Button
          text="Open"
          onPress={() => {}}
          labelStyle={{
            fontSize: 16,
          }}
          height={30}
          bgColor={theme.colors.primary}
          textColor={theme.colors.textSecondary}
          buttonStyle={{
            borderRadius: 15,
          }}
        />
        <ButtonContainer>
          <Button
            text="Delete"
            onPress={() => {}}
            height={30}
            labelStyle={{
              fontSize: 16,
            }}
            bgColor={theme.colors.background}
            textColor={theme.colors.delete}
            buttonStyle={{
              borderColor: "red",
              borderWidth: 1,
              borderStyle: "solid",
              borderRadius: 15,
            }}
          />
        </ButtonContainer>
      </ButtonsWrapper>
    </Wrapper>
  );
};
