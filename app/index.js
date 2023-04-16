import { SafeAreaView, Text, View, Image, StyleSheet } from "react-native"
import { useRouter, Stack } from "expo-router"
import { COLORS, FONTS, IMAGES, SIZES } from "../constants"
import { AntDesign } from '@expo/vector-icons'
import { FlatList, ScrollView } from "react-native-gesture-handler"
const Home = () => {
  const tags = [
    'All', 'Bookmarked', 'Work', 'Daily', 'Study'
  ]

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
            headerRight: () => (<AntDesign name="plus" size={24} color="white" />),
            headerLeft: () => (
              <View style={userProfileStyles.usernameContainer}>
                <Text style={userProfileStyles.username}>Hello Joshua</Text>
                <Text style={userProfileStyles.subUsername}>Here is a complete overview of your budget</Text>
              </View>
            )
          }}
          
      />
      <View style={styles.container}>
        <View style={styles.basicInfoContainer}>
          <Text style={styles.prompt}>Your balance</Text>
          <Text style={styles.balance}>$8,200.00</Text>
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add expense</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add income</Text>
            </View>
          </View>
        </View>
      </View>
        
    </SafeAreaView>
  )
}


const userProfileStyles = StyleSheet.create({

  username: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.lg,
    color: COLORS.dtTextPrimary
  },
  subUsername: {
    color: COLORS.dtTextPrimary,
    fontFamily: FONTS.medium,
    color: COLORS.dtTextSecondary
  }

})

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 20
  }, 
  basicInfoContainer: {
    backgroundColor: COLORS.dtCTA,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  prompt:{
    color: COLORS.dtTextPrimary,
    fontFamily: FONTS.regular,
    textAlign: "center"
  },
  balance: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.xl,
    color: COLORS.dtTextPrimary,
    textAlign: "center",
    marginTop: 5
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    gap: 10
  },
  button: {
    backgroundColor: "#5c65fa",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius:20,
    flex: 1
  },
  buttonText: {
    color: COLORS.dtTextPrimary,
    fontFamily: FONTS.medium,
    fontSize: SIZES.md,
    textAlign: "center"
  }
})


export default Home;