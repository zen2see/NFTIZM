import { View, Text, Image, TextInput } from "react-native"
import { COLORS, FONTS, SIZES, assets } from "../constants"

const HomeHeader = ({ onSearch  }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Image
          style={{
            width: 90,
            height: 25,
          }}
          source={assets.logo}
          resizeMode="contain"
        />
        <View
          style={{
            width: 45,
            height: 45,
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}          
            source={assets.person01}
            resizeMode="contain"
          />
          <Image   
            style={{
              position: "absolute",
              width: 15, 
              height: 15,
              bottom: 0,
              right: 0
            }}
            source={assets.badge}
            resizeMode="contain"
          />
        </View>  
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            // fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello, Victoria 👋
        </Text>
        <Text
          style={{
            // fontFamily: FONTS.regular,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2
          }}
        >
          Let's find a masterpiece
        </Text>
        <View style={{ marginTop: SIZES.font }}>
          <View style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small -2
          }}>
            <Image
              style={{
                width: 20,
                height: 20,
                marginRight: SIZES.base
              }}
              source={assets.search}
              resizeMode="contain"
            />
            <TextInput style={{ flex: 1 }}  
              placeholder="Search NFTs"
              onChangeText={ onSearch }
            />
          </View>

        </View>
      </View>
        
    </View>
  )
}

export default HomeHeader