import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './currencycard.style'

const flagPics = {
  CZK: 'https://img.icons8.com/?size=512&id=yZkw6DLUD9JM&format=png',
  EUR: 'https://img.icons8.com/?size=512&id=Y76SzpmxslW4&format=png',
  GBP: 'https://img.icons8.com/?size=1x&id=ShNNs7i8tXQF&format=png',
  RUB: 'https://img.icons8.com/?size=1x&id=vioRCshpCBKv&format=png',
  UAH: 'https://img.icons8.com/?size=1x&id=5cFvmahMQv5S&format=png',
  USD: 'https://img.icons8.com/?size=1x&id=fIgZUHgwc76e&format=png',
}

const CurrencyCard = ({ currency, currencyValues, baseCurrency, amount }) => {
  const euroAmount = Number(amount) / currencyValues[baseCurrency]
  const exchangeValue = euroAmount * currencyValues[currency]

  return (
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity style={styles.flagContainer}>
        <Image
          source={{
            uri: flagPics[currency],
          }}
          resizeMode='contain'
          style={styles.flagImage}
        />
      </TouchableOpacity>

      <View style={styles.amountContainer}>
        <Text style={styles.amount} numberOfLines={1}>
          {exchangeValue}
        </Text>
        <Text style={styles.currency}>{currency}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CurrencyCard
