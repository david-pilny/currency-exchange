import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './recentnewscard.style'

const RecentNewsCard = ({ item, selectedNews, handleCardPress }) => {
  let imgURL = 'https://dummyimage.com/200x300&text=news'
  let authorName = 'N/A'

  if (item.files[0]) imgURL = item.files[0].urlCdn
  if (item.authors[0])
    if (item.authors[0].authorName) authorName = item.authors[0].authorName

  return (
    <TouchableOpacity
      style={styles.container(selectedNews, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.imgContainer(selectedNews, item)}>
        <Image
          source={{
            uri: imgURL,
          }}
          resizeMode='cover'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.minutesToRead} numberOfLines={1}>
        {item.minutesToRead} min
      </Text>
      <View style={styles.articlesName}>
        <Text style={styles.articlesName(selectedNews, item)} numberOfLines={3}>
          {item.articlesName}
        </Text>
        <Text style={styles.authorName}>{authorName}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default RecentNewsCard
