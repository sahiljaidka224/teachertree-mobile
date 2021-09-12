import { Button, SelectorMenu } from "../components";
import React, { useState } from "react";

import { ButtonMode } from "../common/enums";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Menu } from "react-native-paper";
import styled from "styled-components/native";
import { theme } from "../theme/default";

type Mode = "date" | "time";

const Wrapper = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
  padding: 45px;
  display: flex;
`;

const DescriptionText = styled.Text<{ marginTop?: number }>`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 15px;
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : 0)};
`;

const TimeContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const TimeWrapper = styled.View`
  display: flex;
  flex-direction: column;
  min-width: 100px;
`;

const StaffCountWrapper = styled.View`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  margin-top: 20px;
`;

const CirclularButton = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

const ButtonsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100px;
  align-items: center;
  margin-top: 5px;
`;

export const CreateOfferScreen = () => {
  const [visible, setVisible] = useState(true);
  const [mode, setMode] = useState<Mode>("date");
  const [show, setShow] = useState(false);
  const showMode = (currentMode: Mode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Wrapper>
      <DescriptionText>Teacher Type</DescriptionText>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <SelectorMenu
            onPress={openMenu}
            title="Select teacher type"
            iconName="chevron-down"
          />
        }
      >
        <Menu.Item onPress={() => {}} title="English Teacher" />
      </Menu>
      <DescriptionText marginTop={20}>Date</DescriptionText>
      <SelectorMenu
        onPress={showDatepicker}
        title="06 July, 2021"
        iconName="calendar"
      />
      <TimeContainer>
        <TimeWrapper>
          <DescriptionText>Start Time</DescriptionText>
          <SelectorMenu
            onPress={showTimepicker}
            title="09:00  "
            iconName="time"
          />
        </TimeWrapper>
        <TimeWrapper>
          <DescriptionText>End Time</DescriptionText>
          <SelectorMenu
            onPress={showTimepicker}
            title="12:00  "
            iconName="time"
          />
        </TimeWrapper>
      </TimeContainer>
      <StaffCountWrapper>
        <DescriptionText>Number of Staff</DescriptionText>
        <ButtonsWrapper>
          <CirclularButton activeOpacity={0.3}>
            <DescriptionText style={{ fontWeight: "bold" }}>-</DescriptionText>
          </CirclularButton>
          <DescriptionText style={{ fontSize: 17 }}>1</DescriptionText>
          <CirclularButton activeOpacity={0.3}>
            <DescriptionText style={{ fontWeight: "bold" }}>+</DescriptionText>
          </CirclularButton>
        </ButtonsWrapper>
      </StaffCountWrapper>
      <Button
        text="Send Offer"
        onPress={() => {}}
        mode={ButtonMode.Contained}
        textColor={theme.colors.textSecondary}
        bgColor={theme.colors.secondary}
      />
      <DateTimePickerModal
        isVisible={show}
        mode={mode}
        onConfirm={() => {
          setShow(false);
        }}
        onCancel={() => {
          setShow(false);
        }}
      />
    </Wrapper>
  );
};
