import * as Font from "expo-font"

const useFonts = async () => {
  await Font.loadAsync({
    // InterBold: require("../assets/fonts/Inter-Bold.ttf"),
    // InterSemiBold: require("../assets/fonts/Inter-SemiBold.ttf"),
    // InterMedium: require("../assets/fonts/Inter-Medium.ttf"),
    // InterRegular: require("../assets/fonts/Inter-regular.ttf"),
    // InterLight: require("../assets/fonts/Inter-Light.ttf"),
  })
}

export default useFonts