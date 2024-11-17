import { ViewStyle } from 'react-native/types'
import { CountryItem } from 'react-native-country-codes-picker'

export type TExampleNumber = {
  country: string
  countryCallingCode: string
  getMetadata: () => {}
  nationalNumber: string
  number: string
}

export type TCountryPhoneProps = {
  setCountry?: (country: CountryItem | null) => void
  setInputValue?: (text: string) => void
  value: string
  setCorrectLength?: (number: number) => void
  errors?: {
    country: string
    phone: string
  }
  country?: CountryItem
  disabled?: boolean
  style?: ViewStyle
}
