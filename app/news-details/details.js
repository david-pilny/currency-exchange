import { View, SafeAreaView, ScrollView } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import {
  ArticleHeader,
  Article,
  ArticleFooter,
  ScreenHeaderBtn,
} from '../../components'

import { COLORS, icons, SIZES } from '../../constants'
import base64 from 'base-64'

const NewsDetails = () => {
  const params = useSearchParams()
  const router = useRouter()
  const item = JSON.parse(base64.decode(params.item))

  let imgURL = 'https://dummyimage.com/200x300&text=news'
  let authorName = 'N/A'

  if (item.files[0]) imgURL = item.files[0].urlCdn
  if (item.authors[0])
    if (item.authors[0].authorName) authorName = item.authors[0].authorName

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.push('/')}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
          ),
          headerTitle: '',
        }}
      />
      <>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <ArticleHeader
              headerImg={imgURL}
              articlesName={item.articlesName}
              authorName={authorName}
              readingTime={item.minutesToRead + 'min'}
            />

            <Article info={item.articlesDescription} />
          </View>
        </ScrollView>
        <ArticleFooter url={item.canonicalSupplier} />
      </>
    </SafeAreaView>
  )
}

export default NewsDetails
