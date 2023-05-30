import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const DrawerContent = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
        <DrawerItem
          label="Login"
          onPress={() => navigateToScreen('Login')}
        />
        <DrawerItem
          label="Settings"
          onPress={() => navigateToScreen('Settings')}
        />
        <DrawerItem
          label="Menu"
          onPress={() => navigateToScreen('Menu')}
        />
        <DrawerItem
          label="About"
          onPress={() => navigateToScreen('About')}
        />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DrawerContent;
