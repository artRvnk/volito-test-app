import { StyleSheet, TouchableOpacity, View } from 'react-native'

import styled from 'styled-components'

import { EColors, EFonts } from '@/shared/lib'

import { isIos, WP } from '@/shared/tools'

import { FlexWrapper } from '../../styled'

export const CountryButton = styled(TouchableOpacity)`
  position: absolute;
  left: 0px;
  height: 100%;
  border-radius: 11px;
  width: 33%;
  align-items: center;
  z-index: 2;
`

export const ItemWrapper = styled(FlexWrapper)`
  padding: 10px 0px;
  border-bottom-width: 1px;
  border-bottom-color: ${EColors.neutral_400};
  justify-content: flex-start;
`

export const PhoneInputWrapper = styled(View)`
  flex: 1;
  margin-left: 8px;
`

export const styles = StyleSheet.create({
  modal: {
    height: '90%',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  textInput: {
    height: 44,
    fontSize: 14,
    paddingLeft: 24,
    fontFamily: EFonts.regular,
    backgroundColor: EColors.neutral_300,
    justifyContent: 'center',
    color: EColors.neutral_500,
    alignItems: 'center',
    borderWidth: 0,
  },
  input: { color: EColors.white },
  text: { maxWidth: '75%' },
})

export const picker = StyleSheet.create({
  // global view
  modal: {
    flex: 1,
    backgroundColor: EColors.neutral_500,
    marginTop: isIos ? 100 : 60,
  },
  // search input
  textInput: {
    color: EColors.white,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: EColors.neutral_400,
  },
  // search if not found
  searchMessageText: {
    color: EColors.white,
  },
  // container if not found
  countryMessageContainer: {
    flex: 1,
  },
  // line
  line: {
    backgroundColor: EColors.neutral_200,
  },
  // item
  countryButtonStyles: {},
  // country flag (item)
  flag: {
    maxWidth: WP(10),
    fontSize: 20,
  },
  // country code (item)
  dialCode: {
    // color: EColors.white,
  },
  // country name (item)
  countryName: {
    color: EColors.white,
  },
})
