import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () =>{
  const [counter, setCounter] = useState(0);
  
  return (
    <View>
      <Button 
        title="Increase"
        onPress={() => {
          // You never want to modify state directly...
          // counter++ is BAD
          // counter = counter + 1 is also BAD
          setCounter(counter + 1)
        }}
      />
      <Button 
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1)
        }}
      />
      <Text>Current Count: { counter }</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
