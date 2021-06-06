import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Hello, World</Text>
      <Text>My name is Edwina!</Text>
      <Text style={styles.text3}>This is my first React Native App</Text>
      <Image style={styles.img} source={{ uri: 'https://images.unsplash.com/photo-1622952736534-4ca61f7992fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80' }}></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink'
  },
  text1: {
    textDecorationLine: "underline",
    fontVariant: ["small-caps"]
  },
  text3: {
    color: 'green',
    fontWeight: "800"
  },
  img: {
    width: 400,
    height: 250,
    marginTop: 15
  }
});
