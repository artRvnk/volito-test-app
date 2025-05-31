import { TouchableOpacity, View } from 'react-native'

import styled from 'styled-components'

import { EColors } from '@/shared/lib'

export const Styles = {
  Container: styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
  `,

  Modal: styled(View)`
    background-color: ${EColors.neutral_400};
    border-radius: 16px;
    padding: 32px 24px;
    width: 100%;
    max-width: 320px;
    border: 1px solid ${EColors.neutral_300};
  `,

  ButtonContainer: styled(View)`
    gap: 16px;
    margin-top: 32px;
    margin-bottom: 24px;
  `,

  LanguageButton: styled(TouchableOpacity).attrs({ activeOpacity: 0.7 })<{
    isSelected: boolean
  }>`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-radius: 12px;
    border-width: 2px;
    border-color: ${props =>
      props.isSelected ? EColors.primary_400 : EColors.neutral_300};
    background-color: ${props =>
      props.isSelected ? EColors.primary_100 : EColors.neutral_300};
  `,

  CheckmarkContainer: styled(View)`
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background-color: ${EColors.primary_400};
    align-items: center;
    justify-content: center;
  `,

  CloseButton: styled(TouchableOpacity).attrs({ activeOpacity: 0.7 })`
    padding: 16px 20px;
    border-radius: 12px;
    background-color: ${EColors.neutral_300};
    align-items: center;
    border: 1px solid ${EColors.neutral_200};
  `,

  LoadingOverlay: styled(View)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${EColors.black_opacity_2};
    border-radius: 16px;
    align-items: center;
    justify-content: center;
  `,
}
