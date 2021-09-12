import { FlatList, ListRenderItemInfo } from "react-native";

import { Button } from "../components";
import React from "react";
import { StatusCard } from "../components/StatusCard";
import styled from "styled-components/native";
import { theme } from "../theme/default";

const Wrapper = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
  padding: 10px;
  display: flex;
`;

const StatusCardWrapper = styled.View`
  margin-bottom: 18px;
`;

const StatusWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin: 10px;
  margin-bottom: 16px;
`;

const ButtonWrapper = styled.View`
  flex: 1;
  padding: 1px;
`;

export const OffersScreen = () => {
  const [selectedButton, updateSelectedButton] = React.useState(0);

  const onInProgress = () => {
    updateSelectedButton(0);
  };

  const onReady = () => {
    updateSelectedButton(1);
  };
  // FIXME: any
  const itemRenderer = (item: ListRenderItemInfo<any>) => {
    return (
      <StatusCardWrapper>
        <StatusCard />
      </StatusCardWrapper>
    );
  };

  // FIXME: any
  const keyExtractor = (_item: any, index: number) => {
    return index.toString();
  };

  return (
    <Wrapper>
      <StatusWrapper>
        <ButtonWrapper>
          <Button
            key="0"
            text="In progress"
            onPress={onInProgress}
            borderRadius={5}
            bgColor={selectedButton === 0 ? "white" : "#e5e5e5"}
            textColor={
              selectedButton === 0 ? theme.colors.secondary : "#bdbdbd"
            }
            labelStyle={{
              fontSize: 16,
            }}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            key="1"
            text="Ready"
            onPress={onReady}
            borderRadius={5}
            bgColor={selectedButton === 1 ? "white" : "#e5e5e5"}
            textColor={
              selectedButton === 1 ? theme.colors.secondary : "#bdbdbd"
            }
            labelStyle={{
              fontSize: 16,
            }}
          />
        </ButtonWrapper>
      </StatusWrapper>
      <FlatList
        data={[1, 2]}
        renderItem={itemRenderer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
      />
    </Wrapper>
  );
};
