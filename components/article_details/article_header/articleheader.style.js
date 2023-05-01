import { StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBox: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: SIZES.large,
  },
  logoImage: {
    borderRadius: SIZES.medium,
    width: '100%',
    height: '100%',
  },
  articlesNameBox: {
    marginTop: SIZES.small,
  },
  articlesName: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    textAlign: 'center',
  },
  authorNameBox: {
    marginTop: SIZES.small / 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  authorName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.primary,
    fontFamily: FONT.medium,
  },
  readingTimeBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  readingTime: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: 2,
  },
})

export default styles
