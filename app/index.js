import { SafeAreaView, Text, View, Image, StyleSheet } from "react-native"
import { useRouter, Stack } from "expo-router"
import { COLORS, FONTS, IMAGES, SIZES } from "../constants"
import { AntDesign } from '@expo/vector-icons'
import { FlatList, ScrollView } from "react-native-gesture-handler"
import Tag from "../components/Tag/Tag"
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
            headerTitle: "Notesbook",
            statusBarColor: COLORS.dtPrimary,
            statusBarStyle: "light",
            headerTintColor: COLORS.dtPrimary,
            headerTitleStyle: {color: "white", fontFamily: FONTS.regular, fontSize: SIZES.xl},
            headerTitleAlign: "center",
            headerRight: () => (<AntDesign name="plus" size={24} color="white" />),
            headerLeft: () => (
              <View style={userProfileStyles.usernameContainer}>
                <Text style={userProfileStyles.username}>JT</Text>
              </View>
            )
          }}
          
      />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headerText1}>My</Text>
          <Text style={styles.headerText2}>Notes</Text>
          <FlatList data={tags} renderItem={({item}) => <Tag tag={item} /> }  horizontal={true} style={{marginTop: 10}}  />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


const userProfileStyles = StyleSheet.create({
  usernameContainer: {
    backgroundColor: COLORS.dtCTA,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  username: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.md
  }
})

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 5,
    borderTopWidth: 2,
    borderColor: COLORS.dtSecondary
  },
  headerText1: {
    fontSize: 80,
    color: COLORS.dtTextPrimary,
    fontFamily: FONTS.medium
  },
  headerText2: {
    fontSize: 80,
    color: COLORS.dtTextPrimary,
    fontFamily: FONTS.medium
  }
})

export default Home;