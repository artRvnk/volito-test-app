import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export const capitalizeFL = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const WP = wp
export const HP = hp
