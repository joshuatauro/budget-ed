import { SafeAreaView, Text, View, Image, StyleSheet } from "react-native"
import { useRouter, Stack } from "expo-router"
import { COLORS, FONTS, IMAGES, SIZES } from "../constants"
import { FontAwesome } from '@expo/vector-icons'
const Home = () => {
  return(
    <SafeAreaView style={{backgroundColor: COLORS.dtPrimary, minHeight: "100%"}}>
      <Stack.Screen 
          options={{
            headerStyle: {
              backgroundColor: COLORS.dtPrimary,
            },
            headerShadowVisible: false,
            headerTitle: "",
            statusBarColor: COLORS.dtPrimary,
            statusBarStyle: "light",
            headerTintColor: COLORS.dtPrimary,
            headerLeft: () => ( <UserMiniProfile />),
            headerRight: () => (
              <View>
                <Text></Text>
              </View>
            )
          }}
          
      />
      <View >
        <Text>This is joshuas first react native app so please do fuckinfg work</Text>
        <FontAwesome name="user-circle" size={24} color="gray" />
      </View>
    </SafeAreaView>
  )
}

const UserMiniProfile = () => {
  return(
    <View>
      <View style={userProfileStyles.flexContainer}>
        <Image style={userProfileStyles.profileImage} source={IMAGES.profile} />
        <Text style={[userProfileStyles.username, {color: COLORS.dtTextSecondary, marginLeft: 10}]}>morning, </Text>
        <Text style={userProfileStyles.username}>Joshua</Text>
      </View>
    </View>
  )
}

const userProfileStyles = StyleSheet.create({
  profileImage: {
    height: 30,
    width: 30,
    borderRadius: 20
  },
  flexContainer: {
    flexDirection: "row",
    alignItems: "center",
    fontFamily: FONTS.medium
  },
  username: {
    color: COLORS.dtTextPrimary,
    // fontSize: SIZES.sm
  }
})

export default Home;