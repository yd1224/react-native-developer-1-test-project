import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import mockData from './data/mock.json'
import { colors } from './ds/colors'
import TagExpandableSection from './ds/components/TagExpandableSection'

export const Screen1: React.FC<{}> = () => {
  const insets = useSafeAreaInsets()

  const handleTagPress = (tag: string) => {
    console.log(`Tag pressed: ${tag}`)
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.surface.primary,
        paddingHorizontal: 16
      }}
    >
      <StatusBar style='light' />
      <ScrollView
        style={{ flex: 1 }}
        alwaysBounceVertical={false}
        contentContainerStyle={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          gap: 10
        }}
      >
        {/* Render the section with description */}
        <TagExpandableSection
          title={mockData.sectionWithDescription.title}
          description={mockData.sectionWithDescription.description}
          tags={mockData.sectionWithDescription.tags}
          onTagPress={handleTagPress}
        />
        {/* Render the section without description */}
        <TagExpandableSection
          title={mockData.section.title}
          tags={mockData.section.tags}
          onTagPress={handleTagPress}
        />
      </ScrollView>
    </View>
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
