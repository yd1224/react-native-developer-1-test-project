import { TouchableOpacity, StyleSheet } from 'react-native'

import Text from './Text'

interface TagProps {
  text: string
  onPress: () => void
}

const Tag = ({ text, onPress }: TagProps) => {
  return (
    <TouchableOpacity style={styles.tag} onPress={onPress}>
      <Text typeface='P3-Medium' style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  tag: {
    backgroundColor: 'rgba(22, 104, 227, 1)',
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 20,
    alignSelf: 'baseline'
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500'
  }
})

export default Tag
