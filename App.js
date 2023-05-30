import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Login from './Login';
import Menu from './Menu';
import About from './About';
import Settings from './Settings';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <AppHeader />
        <Drawer.Navigator initialRouteName="Login" screenOptions={{ headerStyle: { backgroundColor: 'lightyellow' } }} drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Menu" component={Menu} />
          <Drawer.Screen name="About" component={About} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
        <AppFooter />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
});
