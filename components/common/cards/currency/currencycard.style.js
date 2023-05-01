import { StyleSheet } from 'react-native'

import { COLORS, SHADOWS, SIZES } from '../../../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: '#FFF',
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  flagContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flagImage: {
    width: '100%',
    height: '100%',
  },
  amountContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  amount: {
    fontSize: SIZES.medium,
    fontFamily: 'DMBold',
    color: COLORS.primary,
  },
  currency: {
    fontSize: SIZES.small + 2,
    fontFamily: 'DMRegular',
    color: COLORS.gray,
    marginTop: 3,
    textTransform: 'uppercase',
  },
})

export default styles
