import React from 'react'
import { View, Text } from 'react-native'

import styles from './article.style'
import { decode } from 'html-entities'

const Article = ({ info }) => {
  info = JSON.parse(info)
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Article:</Text>
      <View style={styles.contentBox}>
        {info.map((paragraph, key) => {
          return (
            <Text style={styles.contextText} key={key}>
              {decode(paragraph.content)}
            </Text>
          )
        })}
      </View>
    </View>
  )
}

export default Article
