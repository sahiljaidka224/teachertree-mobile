import {
  BottomTabParamList,
  CreateTabParamList,
  HistoryTabParamList,
  OffersTabParamList,
  StaffTabParamList,
} from "../types";
import {
  CreateOfferScreen,
  HomeScreen,
  OffersScreen,
  StaffScreen,
} from "../screens";

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName="Offers">
      <BottomTab.Screen
        name="Offers"
        component={OfferNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Create"
        component={CreateViewNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="send" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="History"
        component={HistoryNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="time" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Staff"
        component={StaffNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="at-circle" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const TabBarIcon = (props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) => {
  return <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />;
};
const CreateStackNavigator = createStackNavigator<CreateTabParamList>();

const CreateViewNavigator = () => {
  return (
    <CreateStackNavigator.Navigator>
      <CreateStackNavigator.Screen
        name="Create"
        component={CreateOfferScreen}
        options={{ headerTitle: "Create" }}
      />
    </CreateStackNavigator.Navigator>
  );
};

const OffersStack = createStackNavigator<OffersTabParamList>();

const OfferNavigator = () => {
  return (
    <OffersStack.Navigator>
      <OffersStack.Screen
        name="Offers"
        component={OffersScreen}
        options={{ headerTitle: "Offers" }}
      />
    </OffersStack.Navigator>
  );
};

const StaffStack = createStackNavigator<StaffTabParamList>();

const StaffNavigator = () => {
  return (
    <StaffStack.Navigator>
      <StaffStack.Screen
        name="Staff"
        component={StaffScreen}
        options={{ headerTitle: "Staff" }}
      />
    </StaffStack.Navigator>
  );
};

const HistoryStack = createStackNavigator<HistoryTabParamList>();

const HistoryNavigator = () => {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen
        name="History"
        component={HomeScreen}
        options={{ headerTitle: "History" }}
      />
    </HistoryStack.Navigator>
  );
};
