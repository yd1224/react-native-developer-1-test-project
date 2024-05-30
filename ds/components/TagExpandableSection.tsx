import React from 'react'
import { View, StyleSheet } from 'react-native'
import ExpandableSection from './ExpandableSection'
import Tag from './Tag'

interface TagExpandableSectionProps {
  title: string
  description?: string
  tags: string[]
  onTagPress: (tag: string) => void
}

const TagExpandableSection: React.FC<TagExpandableSectionProps> = ({
  title,
  description,
  tags,
  onTagPress
}) => {
  return (
    <ExpandableSection title={title} description={description}>
      <View style={styles.tagContainer}>
        {tags.map((tag, index) => (
          <Tag key={index} text={tag} onPress={() => onTagPress(tag)} />
        ))}
      </View>
    </ExpandableSection>
  )
}

const styles = StyleSheet.create({
  tagContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8
  }
})

export default TagExpandableSection
