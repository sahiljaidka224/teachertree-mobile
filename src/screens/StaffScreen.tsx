import { FlatList, ListRenderItemInfo } from "react-native";

import React from "react";
import { Searchbar } from "react-native-paper";
import { TeacherView } from "../components";
import styled from "styled-components/native";

const Wrapper = styled.View`
  display: flex;
  flex: 1;
`;

const SearchBarWrapper = styled.View`
  padding: 10px 20px;
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
  justify-content: flex-end;
  align-items: center;
  margin-top: 5px;
  margin-right: 25px;
`;

const DescriptionText = styled.Text<{ marginLeft?: number }>`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 15px;
  margin-left: ${(props) => (props.marginLeft ? `${props.marginLeft}px` : 0)};
  font-weight: bold;
`;

const StatusCardWrapper = styled.View`
  margin-bottom: 18px;
`;

const FlatListWrapper = styled.View`
  padding: 10px;
  flex: 1;
`;

export const StaffScreen = () => {
  // FIXME: any
  const itemRenderer = (item: ListRenderItemInfo<any>) => {
    return (
      <StatusCardWrapper>
        <TeacherView />
      </StatusCardWrapper>
    );
  };

  // FIXME: any
  const keyExtractor = (_item: any, index: number) => {
    return index.toString();
  };
  return (
    <Wrapper>
      <SearchBarWrapper>
        <Searchbar placeholder="Search" onChangeText={() => {}} value="" />
      </SearchBarWrapper>
      <ButtonsWrapper>
        <CirclularButton activeOpacity={0.3}>
          <DescriptionText>+</DescriptionText>
        </CirclularButton>
        <DescriptionText style={{ fontSize: 17 }} marginLeft={10}>
          Add
        </DescriptionText>
      </ButtonsWrapper>
      <FlatListWrapper>
        <FlatList
          data={[1, 2]}
          renderItem={itemRenderer}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
        />
      </FlatListWrapper>
    </Wrapper>
  );
};
