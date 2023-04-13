import { View, Text, StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'
import { AntDesign } from '@expo/vector-icons'

const Note = ({date, title, body}) => {
  const tags = [
    'React', 'C++'
  ]
  return(
    <View style={styles.container}>
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <AntDesign name="calendar" size={12} color={COLORS.dtCTA} />
        <Text  style={[styles.noteBody, {color: COLORS.dtCTA, fontFamily: FONTS.medium, marginLeft: 5, fontSize: SIZES.xs}]}>{date}</Text>
      </View>
      <Text numberOfLines={1} style={styles.noteHeader}>
        {title}
      </Text>
      <Text numberOfLines={6} style={styles.noteBody}>{body}</Text>
      <View style={styles.tagsContainer}>
      {
        tags.map(it => {
          return(
            <View style={styles.tag}>
              <Text style={styles.tagText}>#{it}</Text>
            </View>
          )
        })
      }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: COLORS.dtSecondary,
    backgroundColor: COLORS.dtSecondary,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius:10,
    marginBottom: 10
    
  },
  numbered: {
    fontSize: SIZES.md,
    fontFamily: FONTS.medium,
    color: COLORS.dtTextSecondary,
  },
  noteHeader: {
    fontSize: SIZES.xl,
    color: COLORS.dtTextPrimary,
    fontFamily: FONTS.medium,
    marginBottom: 5
  },
  noteBody: {
    color: COLORS.dtTextSecondary,
    fontFamily: FONTS.regular,
    fontSize: SIZES.sm,
    flex: 1,
    // flexWrap: "wrap",
    flexShrink: 1
  },
  tagsContainer: {
    flexDirection: "row",
    marginTop: 10   
  },
  tag: {
    backgroundColor: COLORS.dtCTA,
    marginRight: 5,
    borderRadius: 5,
    paddingHorizontal: 3,
    paddingVertical: 2
  },
  tagText: {
    fontSize: SIZES.xs
  }
})

export default Note