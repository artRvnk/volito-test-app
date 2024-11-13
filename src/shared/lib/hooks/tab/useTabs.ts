import { EStacks } from '@/app/navigation'

import { TStacksKeys, TUseTabs } from '@/widgets/tab/Standard'

// TODO

export const useTabs = () => {
  const tabs: Record<TStacksKeys, TUseTabs> = {
    [EStacks.Home]: {
      icon: 'Home',
    },
    [EStacks.Favorites]: {
      icon: 'HeartEmpty',
    },
    [EStacks.Profile]: {
      icon: 'Profile',
    },
    [EStacks.Chat]: {
      icon: 'Message',
    },
  }

  return { tabs }
}
