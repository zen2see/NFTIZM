
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home"
import Details from "./screens/Details"
import AppLoading from "expo-app-loading"
import React, { useState } from "react"
import useFonts from "./hooks/useFonts"

const Stack = createStackNavigator()
const globalScreenOptions = {
  headerShown: false
}
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {
  const [isReady, setReady] = useState(false) 
  // const [loaded] = useFonts({
  //   InterBold: require("./assets/fonts/Inter-Bold.ttf"),
  //   InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  //   InterMedium: require("./assets/fonst/Inter-Medium.ttf"),
  //   InterRegular: require("./assets/fonts/Inter-regular.ttf"),
  //   InterLight: require("./assets/fonts/Inter-Light.ttf"),
  // })
  // if (!loaded) return null
  const loadFonts = async () => {
    await useFonts()
  } 

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts }
        onFinish={() => setReady(true)}
        onError={() => {console.log("error loading") }}
      />
    )
  }

  

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={globalScreenOptions} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
