import { SafeAreaView, Text, View, Image, StyleSheet } from "react-native"
import { useRouter, Stack } from "expo-router"
import { COLORS, FONTS, IMAGES, SIZES } from "../constants"
import { AntDesign } from '@expo/vector-icons'
import { FlatList, ScrollView } from "react-native-gesture-handler"
import Tag from "../components/Tag/Tag"
import Note from "../components/OwnNotes/Note"
const Home = () => {
  const tags = [
    'All', 'Bookmarked', 'Work', 'Daily', 'Study'
  ]

  const notes = [
    {
      date: "11th Feb 2023",
      title: "Create the product and blog page for portfolio",
      body: "Task management software is a great tool that allows you to manage multiple projects at once and distribute the workload between team members effectively. Meet our new concept of a task manager."
    },
    {
      date: "10th Feb 2023",
      title: "How to define two column layout using flexbox ?",
      body: "Approach: To create a two-column layout, first we create a <div> element with property display: flex, it makes that a div flexbox and then add flex-direction: row, to make the layout column-wise. Then add the required div inside the above div with require width and they all will come as columns. In the case of a two-column layout, we add two divs inside the parent div"
    },
    {
      date: "11th Feb 2023",
      title: "Create the product and blog page for portfolio",
      body: "Task management software is a great tool that allows you to manage multiple projects at once and distribute the workload between team members effectively. Meet our new concept of a task manager."
    },
    {
      date: "10th Feb 2023",
      title: "How to define two column layout using flexbox ?",
      body: "Approach: To create a two-column layout, first we create a <div> element with property display: flex, it makes that a div flexbox and then add flex-direction: row, to make the layout column-wise. Then add the required div inside the above div with require width and they all will come as columns. In the case of a two-column layout, we add two divs inside the parent div"
    }
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
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.headerText1}>My</Text>
          <Text style={styles.headerText2}>Notes</Text>
          {/* <FlatList data={tags} renderItem={({item}) => <Tag tag={item} /> }  horizontal={true} style={{marginTop: 10, marginBottom: 40}}  /> */}
          <View style={styles.notesContainer}>
            <FlatList data={notes} renderItem={({item}) => <Note title={item.title} body={item.body} date={item.date} />} />
          </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}


const userProfileStyles = StyleSheet.create({
  usernameContainer: {
    backgroundColor: COLORS.dtCTA,
    width: 40,
    height: 40,
    borderRadius: 10,
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
    marginLeft: 15,
    marginTop: 5,
    borderTopWidth: 2,
    borderColor: COLORS.dtSecondary
  },
  notesContainer: {
    marginRight: 15
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