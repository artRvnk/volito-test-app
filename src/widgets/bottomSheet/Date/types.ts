import { DatePickerProps } from 'react-native-date-picker'

export type TDatePickerProps = {
  value?: string
  onChange?: (value: string) => void
  pickerProps?: Partial<DatePickerProps>
  maximumDate?: Date
  minimumDate?: Date
  locale?: string
  mode?: 'date' | 'time'
  title: string
}
