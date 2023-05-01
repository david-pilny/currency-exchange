import { StyleSheet } from 'react-native'

import { COLORS, FONT, SHADOWS, SIZES } from '../../../../constants'

const styles = StyleSheet.create({
  container: (selectedNews, item) => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor:
      selectedNews === item.canonicalSupplier ? COLORS.primary : '#FFF',
    borderRadius: SIZES.medium,
    justifyContent: 'space-between',
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  imgContainer: (selectedNews, item) => ({
    width: 70,
    height: 70,
    backgroundColor:
      selectedNews === item.canonicalSupplier ? '#FFF' : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  logoImage: {
    borderRadius: SIZES.medium,
    width: '100%',
    height: '100%',
  },
  minutesToRead: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: '#B3AEC6',
    marginTop: SIZES.small / 1.5,
  },
  articlesName: {
    marginTop: SIZES.large,
  },
  articlesName: (selectedNews, item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color:
      selectedNews === item.canonicalSupplier ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  publisher: (selectedNews) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color:
      selectedNews === item.canonicalSupplier ? COLORS.white : COLORS.primary,
  }),
  authorName: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: '#B3AEC6',
  },
})

export default styles
