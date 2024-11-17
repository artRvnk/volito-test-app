import { EStacks } from '@/app/navigation'

import { TStacksKeys, TUseTabs } from '@/widgets/tab/Bottom'

import { EColors } from '../../constants'

export const useTabs = () => {
  const tabs: Record<TStacksKeys, TUseTabs> = {
    [EStacks.Notes]: {
      icon: 'Task',
      active: EColors.primary_400,
      inactive: EColors.gray,
    },
    [EStacks.Map]: {
      icon: 'Map',
      active: EColors.primary_400,
      inactive: EColors.gray,
    },
  }

  return { tabs }
}
