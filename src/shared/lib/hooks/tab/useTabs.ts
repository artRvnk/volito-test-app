import { useTranslation } from 'react-i18next'

import { EStacks } from '@/app/navigation'

import { TStacksKeys, TUseTabs } from '@/widgets/tab/Bottom'

import { EColors } from '../../constants'

export const useTabs = () => {
  const { t } = useTranslation()

  const tabs: Record<TStacksKeys, TUseTabs> = {
    [EStacks.Notes]: {
      icon: 'Task',
      active: EColors.primary_400,
      inactive: EColors.gray,
      title: t('notes.title'),
    },
    [EStacks.Map]: {
      icon: 'Map',
      active: EColors.primary_400,
      inactive: EColors.gray,
      title: t('map.title'),
    },
  }

  return { tabs }
}
