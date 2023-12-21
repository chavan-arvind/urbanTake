import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextInput,Button,View } from 'react-native-paper';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    console.log('Logging in...');
  };

  return (
    <View>
      <TextInput
      label="Password"
      secureTextEntry
      right={<TextInput.Icon icon="eye" />}/>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginScreen;