import React, { useState, useRef, ReactNode } from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  ImageStyle,
  ScrollView,
  Text
} from 'react-native'
import * as Animatable from 'react-native-animatable'

import { Text as CustomText } from './Text'
import icon from '../../assets/profileIcon.png'
import { toggleAnimation } from '../animations/toggleAnimation'

interface ExpandableSectionProps {
  title: string
  description?: string
  children: ReactNode
}

const ExpandableSection = ({ title, description, children }: ExpandableSectionProps) => {
  const [expanded, setExpanded] = useState(false)

  const imageRef = useRef<Animatable.Image & View>(null)

  const rotateClockwise: Animatable.CustomAnimation<ImageStyle> = {
    from: {
      transform: [{ rotate: '0deg' }]
    },
    to: {
      transform: [{ rotate: '180deg' }]
    }
  }

  const rotateCounterClockwise: Animatable.CustomAnimation<ImageStyle> = {
    from: {
      transform: [{ rotate: '180deg' }]
    },
    to: {
      transform: [{ rotate: '0deg' }]
    }
  }

  const toggleExpanded = () => {
    if (imageRef.current) {
      const animation = expanded ? rotateCounterClockwise : rotateClockwise

      ;(imageRef.current as Animatable.View & View).animate(animation, 600)
    }

    LayoutAnimation.configureNext(toggleAnimation)

    setExpanded(!expanded)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleExpanded} style={styles.header}>
        <View style={styles.titleContainer}>
          <Text
            numberOfLines={expanded ? undefined : 1}
            ellipsizeMode={expanded ? undefined : 'tail'}
            style={styles.title}
          >
            {title}
          </Text>
        </View>
        <Animatable.Image ref={imageRef} source={icon} style={styles.img} useNativeDriver={true} />
      </TouchableOpacity>
      {expanded && (
        <Animatable.View style={styles.content} useNativeDriver>
          {description && (
            <ScrollView style={styles.descriptionContainer}>
              <CustomText typeface='P3' style={styles.descriptionText}>
                {description}
              </CustomText>
            </ScrollView>
          )}
          {children}
        </Animatable.View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(163, 173, 200, 0.08)',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 18,
    overflow: 'hidden'
  },
  img: {
    width: 35,
    height: 35
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  descriptionContainer: {
    maxHeight: 150,
    marginBottom: 20
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  content: {
    borderRadius: 5,
    marginTop: 20,
    overflow: 'hidden'
  },
  descriptionText: {
    fontWeight: 400,
    fontSize: 12,
    color: 'rgba(194, 195, 199, 1)',
    lineHeight: 18
  },
  titleContainer: {
    flex: 1,
    marginRight: 10
  }
})

export default ExpandableSection
