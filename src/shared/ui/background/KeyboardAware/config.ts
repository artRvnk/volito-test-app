import { KeyboardAwareScrollViewProps } from 'react-native-keyboard-aware-scroll-view'

export const keyboardAwareViewProps: KeyboardAwareScrollViewProps = {
  bounces: false,
  enableOnAndroid: true,
  alwaysBounceVertical: false,
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'handled',
}
