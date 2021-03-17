import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen/TabThreeScreen';
import LinksScreen from '../screens/LinksScreen';

import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} size={24}/>,
        }}
      />
      <BottomTab.Screen
        name="Recommendations"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="comment" color={color} size={24}/>,
        }}
      />
      <BottomTab.Screen
        name="Trends"
        component={LinksScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarMUCommunityIcon name="head-flash-outline" color={color} size={24}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarMUCommunityIcon(props: { name: React.ComponentProps<typeof MaterialCommunityIcons>['name']; size: React.ComponentProps<typeof MaterialCommunityIcons>['size']; color: string }) {
  return <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Octicons>['name']; size: React.ComponentProps<typeof Octicons>['size']; color: string }) {
  return <Octicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}


const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}


const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ headerTitle: 'Tab Three Title' }}
      />
    </TabThreeStack.Navigator>
  );
}