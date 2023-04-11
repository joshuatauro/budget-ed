import { View, Text, StyleSheet } from "react-native"
import { COLORS, FONTS, SIZES } from "../../constants"

const Tag = ({tag}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>#{tag}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 20,
    borderColor: COLORS.dtTextSecondary,
    borderWidth: 1.5,
    marginRight: 10
  },
  text: {
    fontFamily: FONTS.medium,
    color: COLORS.dtTextSecondary,
    fontSize: SIZES.md,
  }
})

export default Tag