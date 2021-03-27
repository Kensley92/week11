import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Card, Button} from 'react-native-elements';

export default function App() {
  return (
    <View style={StyleSheet.container}>
    <Card>
      <Card.Title>Kensley Strong</Card.Title>
      <Text>Favorite Foods</Text>
      <Card.Divider/>
      <Text>Burgers</Text>
      <Card.Divider/>
      <Text>Chicken Tenders</Text>
      <Button title="Submit"/>
    </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: "#FFF",
   alignItems: 'center',
   justifyContent: 'center',
  }
});