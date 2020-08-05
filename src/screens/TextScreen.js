import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput 
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newText) => setName(newText)}
      />
      {name.length >= 8 ? <Text>Your password must be at least 8 characters</Text> : null}
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;
