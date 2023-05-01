import { React, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { useRouter } from 'expo-router'

import styles from './choosecurrency.style'
import { icons, SIZES } from '../../../constants'

const ChooseCurrency = ({
  setCurrAmount,
  handleClick,
  dropdownValue,
  setDropdownValue,
  baseCurrency,
  setBaseCurrency,
}) => {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('1')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Currency Exchange</Text>
      </View>
      <View style={styles.amountContainer}>
        <View style={styles.amountWrapper}>
          <TextInput
            keyboardType='numeric'
            maxLength={10}
            style={styles.amountInput}
            value={inputValue}
            onChangeText={(text) => {
              setInputValue(text)
            }}
            placeholder='Amount'
          />
        </View>

        <View style={styles.amountWrapper}>
          <DropDownPicker
            open={open}
            value={dropdownValue}
            items={baseCurrency}
            setOpen={setOpen}
            setValue={setDropdownValue}
            setItems={setBaseCurrency}
            placeholder='Select the currency'
            dropDownDirection='TOP'
          />
        </View>

        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => {
            handleClick(), setCurrAmount(inputValue)
          }}
        >
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.submitBtnImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChooseCurrency
