import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './articleheader.style'

const ArticleHeader = ({
  headerImg,
  articlesName,
  authorName,
  readingTime,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: headerImg,
          }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.articlesNameBox}>
        <Text style={styles.articlesName}>{articlesName}</Text>
      </View>

      <View style={styles.authorNameBox}>
        <Text style={styles.authorName}>{authorName} / </Text>
        <View style={styles.readingTimeBox}>
          <Text style={styles.readingTime}>Read: {readingTime}</Text>
        </View>
      </View>
    </View>
  )
}

export default ArticleHeader
