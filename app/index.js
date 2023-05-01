import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { useState } from 'react'
import { Stack, useRouter } from 'expo-router'

import { COLORS, icons, images, SIZES } from '../constants'
import {
  Recentnews,
  ScreenHeaderBtn,
  ChooseCurrency,
  Currencies,
} from '../components'

const Home = () => {
  const router = useRouter()
  const [currAmount, setCurrAmount] = useState('1')
  const [dropdownValue, setDropdownValue] = useState('EUR')
  let [baseCurr, setBaseCurr] = useState('EUR')
  const [baseCurrency, setBaseCurrency] = useState([
    { label: 'USD', value: 'USD' },
    { label: 'EUR', value: 'EUR' },
    { label: 'CZK', value: 'CZK' },
    { label: 'UAH', value: 'UAH' },
    { label: 'GBP', value: 'GBP' },
    { label: 'RUB', value: 'RUB' },
  ])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
          ),
          headerTitle: '',
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Recentnews />

          <ChooseCurrency
            setCurrAmount={setCurrAmount}
            dropdownValue={dropdownValue}
            setDropdownValue={setDropdownValue}
            baseCurrency={baseCurrency}
            setBaseCurrency={setBaseCurrency}
            handleClick={() => {
              setBaseCurr(dropdownValue)
            }}
          />

          <Currencies
            key={baseCurr + currAmount}
            amount={currAmount}
            baseCurrency={baseCurr}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
