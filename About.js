import React, { useState } from 'react';
import { StyleSheet, Text, View, SectionList, TextInput, Button } from 'react-native';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const About = () => {

  return (
    <View style={styles.container}>
      <AppHeader/>
      <Text style={styles.title}>About Screen</Text>
      <Text>Welcome to Baham About Us Page</Text>
      <AppFooter/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default About;
