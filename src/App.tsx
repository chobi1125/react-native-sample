import React, { useState } from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  Switch,
} from 'react-native';

// import Actibity from './components/Actibity'
import Component from './components/Component'

export default function App() {
  const [theme, setTheme] = useState(lightTheme)
  const [value,setValue] = useState(false)
  function onValueChange (newValue: boolean){
    setValue(newValue)
  }
  const title: string = 'Hello React Native!!'
  const sub: string = 'sub View'
  const ref = React.useRef<TextInput>(null)
  return(
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <View style={theme.container}>
        {/* <Actibity /> */}
        <Text style={styles.title}>{title}</Text>
        <Text onPress={()=>{
          setTheme(theme === lightTheme ? darkTheme : lightTheme)
        }} style={theme.label}>テーマ切替</Text>
        <Image source={require('./img/nba.jpg')} />
        <Switch value={value} onValueChange={onValueChange}/>
        <StatusBar barStyle="light-content"/>
        {/* 条件分岐 */}
        <TextInput ref={ref} style={styles.input}/>
        <Text onPress={()=>{ref?.current?.focus()}}>focus</Text>
      </View>
      {value && (
        <Component onPress={()=>{console.log('hello')}} color="red" label={sub}>children</Component>
      )}
    </ThemeContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 40,
    color:"blue"
  },
  input: {
    width: 160,
    height: 32
  }
});

const lightTheme = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
    color: 'black'
  },
  label: {
    backgroundColor: 'white',
    color: 'black'
  }
});

const darkTheme = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'black',
    color: 'white'
  },
  label: {
    backgroundColor: 'black',
    color: 'white'
  }
});

type Theme = typeof lightTheme | typeof darkTheme;
interface Context {
  theme: Theme
  setTheme: (newTheme: Theme) => void
}
const ThemeContext = React.createContext<Context>({
  theme: lightTheme,
  setTheme: (_: typeof lightTheme | typeof darkTheme) => {}
})