import { StyleSheet, View } from 'react-native'

import styled from 'styled-components'

import { TAB_HEIGHT } from '@/shared/lib/hooks/tab'
import { HP } from '@/shared/tools'

export const EmptyWrapper = styled(View)`
  margin-top: ${HP(25)}px;
`

export const styles = StyleSheet.create({
  loader: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 16,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: TAB_HEIGHT * 1.25,
  },
  loaderContainer: { width: '100%', height: 200 },
})
