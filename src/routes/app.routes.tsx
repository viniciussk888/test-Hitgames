import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";

const { Navigator, Screen } = createBottomTabNavigator();
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "../global/styles/theme";

//screens
import { List } from "../screens/List";
import { Table } from "../screens/Table";

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary100,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          backgroundColor: theme.colors.highlight
        },
      }}
    >
      <Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="ballot" size={size} color={color} />
          ),
        }}
        name="Tabela"
        component={Table}
      />
      <Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
        name="Listagem"
        component={List}
      />
    </Navigator>
  );
}
