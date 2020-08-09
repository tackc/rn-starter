import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
    // alignItems: 'center'
  },
  textOneStyle: {
    backgroundColor: 'red',
    height: 100
  },
  textTwoStyle: {
    backgroundColor: 'green',
    height: 97,
    // You can tell a child element to fill its parent in 2 ways...
    // ...StyleSheet.absoluteFillObject,
    // position: 'absolute',
    top: 100,
    // right: 0,
    // bottom: 0,
    // left: 0,
    fontSize: 18
  },
  textThreeStyle: {
    backgroundColor: 'purple',
    height: 100
  },
});

export default BoxScreen;
