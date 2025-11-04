import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createTables } from './src/server/db';
import { insertUser, getUsers } from './src/api/services/userService';

import HomeScreen from './src/screens/HomeScreen';
import AsyncScreen from './src/screens/AsyncStorageScreen';
import SqlLiteScreen from './src/screens/SqlLiteScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#2c3e50',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShadowVisible: true,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AsyncStorage"
          component={AsyncScreen}
          options={{
            title: 'AsyncStorage Demo',
          }}
        />
        <Stack.Screen
          name="SqlLite"
          component={SqlLiteScreen}
          options={{
            title: 'SQLite Demo',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
