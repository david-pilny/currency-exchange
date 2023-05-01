import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import { useState, useCallback } from 'react'
import styles from './currencies.style'
import { COLORS } from '../../../constants'
import CurrencyCard from '../../common/cards/currency/CurrencyCard'
import fetchCurrencies from '../../../hook/fetchCurrencies'

const Currencies = ({ baseCurrency, amount }) => {
  const router = useRouter()
  const { data, isLoading, error } = fetchCurrencies()
  let inputObject = {}

  if (data.rates) {
    inputObject = Object.keys(data.rates)
      .filter((key) => ['USD', 'EUR', 'CZK', 'UAH', 'GBP', 'RUB'].includes(key))
      .reduce((obj, key) => {
        obj[key] = data.rates[key]
        return obj
      }, {})
  }
  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data.rates ? (
          Object.keys(inputObject).map((key) => (
            <CurrencyCard
              currency={key}
              currencyValues={inputObject}
              baseCurrency={baseCurrency}
              amount={amount}
              key={key}
            />
          ))
        ) : (
          <Text>Undefined</Text>
        )}
      </View>
    </View>
  )
}

export default Currencies
