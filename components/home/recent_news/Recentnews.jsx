import { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native'
import { useRouter } from 'expo-router'
import { DateTime } from 'luxon'
import base64 from 'base-64'

import styles from './recentnews.style'
import { COLORS, SIZES } from '../../../constants'
import RecentNewsCard from '../../common/cards/recent_news/RecentNewsCard'
import fetchNews from '../../../hook/fetchNews'

const Recentnews = () => {
  const router = useRouter()

  const { data, isLoading, error } = fetchNews(
    DateTime.now().toFormat('dd-MM-yyyy')
  )
  const [selectedNews, setSelectedNews] = useState('')

  const handleCardPress = (item) => {
    paramObject = base64.encode(JSON.stringify(item))

    router.push({
      pathname: '/news-details/details',
      params: { item: paramObject },
    })
    setSelectedNews(item.canonicalSupplier)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Recent financial news</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data.slice(0, 6)}
            renderItem={({ item }) => (
              <RecentNewsCard
                item={item}
                selectedNews={selectedNews}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.canonicalSupplier}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Recentnews
