import React, { FC, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

interface LoginPageProps {
  setIsLoggedIn: (value: boolean) => void
}

const styles = StyleSheet.create({
  viewArea: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorText: {
    width: '100%',
      marginTop: 20,
      marginBottom: 20,
      fontSize: 16,
      fontWeight: '800',
      color: '#7B1113',
      textAlign: 'center'
  }
})

export const LoginPage: FC<LoginPageProps> = ({setIsLoggedIn}) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const dynamicStyles = StyleSheet.create({
    input: {
      marginBottom: 20,
      backgroundColor: '#cfcfcf',
      height: 40,
      width: '80%',
      borderRadius: 12,
      paddingLeft: 12,
      borderColor: error ? '#7B1113' : '',
      borderWidth: error ? 1 : 0
    },
  })

  const checkValues = () => {
    if (login.length < 8 || password.length < 8) {
      return setError(true)
    }
    
    return setIsLoggedIn(true)
  }

  return (
    <View style={styles.viewArea}>
      <TextInput style={dynamicStyles.input} value={login} onChangeText={setLogin} placeholder="Login" />
      <TextInput style={dynamicStyles.input} value={password} onChangeText={setPassword} placeholder="Password" />
      <View style={{width: '80%'}}><Button onPress={() => checkValues()} title="Sign In" /></View>
      {error ? <Text style={styles.errorText}>Длина логина или пароля не может быть меньше 8 символов</Text> : null}
    </View>
  )
}